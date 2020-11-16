import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { filter, map } from 'rxjs/operators';
import { Queries } from '../graphQL/queries/get-contributors';
import { Observable } from 'rxjs';

// Models
import { UserExtendedInfoModel, UserResponseModel } from '../models/user-info.model';
import { RepositoriesContributeToResponseModel, RepositoryDefaultInfoModel } from '../models/repositories.model';
import { NodesModel } from '../models/connection-types.model';

@Injectable()
export class UserService {
  queriesConst = Queries;
  user: UserExtendedInfoModel = null;
  repositories: RepositoryDefaultInfoModel[] = null;

  constructor(private apollo: Apollo) {}

  public getUserInfo(login: string, organizationId: string): Observable<UserExtendedInfoModel> {
    return this.apollo
    .query<UserResponseModel>({
      query: this.queriesConst.getUser,
      variables: {
        userLogin: login,
        orgId: organizationId,
      },
    })
    .pipe(
      map((res) => {
        return res.data.user;
      })
    );
  }

  public getUserRepositories(user: string, lastPersonIndex: string): Observable<NodesModel<RepositoryDefaultInfoModel>> {
    const variables = `${lastPersonIndex ? '$endCursor: String' : ''}`;
    const membersValue = `${lastPersonIndex ? 'after: $endCursor' : ''}`;
    return this.apollo
    .query<RepositoriesContributeToResponseModel>({
      query: this.queriesConst.getRepositoriesContributeTo({ variables, membersValue }),
      variables: {
        userName: user,
        endCursor: lastPersonIndex
      },
    })
    .pipe(
      map(res => res.data.user.repositoriesContributedTo),
      map(repo => ({
        ...repo,
        nodes: repo.nodes.filter(x => x.owner.login === 'angular')
      })));
  }
}
