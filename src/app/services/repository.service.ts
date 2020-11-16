import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Queries } from './../graphQL/queries/get-contributors';
import { map } from 'rxjs/operators';
import {
  AssignableUsersForRepositoryResponseModel,
  RepositoryExtendedInfoModel,
  RepositoryInfoResponseModel,
} from '../models/repositories.model';
import { NodesModel } from '../models/connection-types.model';
import { UserDefaultInfoModel } from '../models/user-info.model';

@Injectable()
export class RepositoryService {
  queriesConsts = Queries;
  repoDetailLoaded = false;
  assignableUsersLoaded = false;

  constructor(private apollo: Apollo) {}

  public getAssignableUsersForRepository(
    repositoryName: string,
    owner: string,
    lastPersonIndex: string
  ): Observable<NodesModel<UserDefaultInfoModel>> {
    const variables = `${lastPersonIndex ? '$endCursor: String' : ''}`;
    const membersValue = `${lastPersonIndex ? 'after: $endCursor' : ''}`;
    return this.apollo
      .query<AssignableUsersForRepositoryResponseModel>({
        query: this.queriesConsts.getAssignableUsersForRepository({
          variables,
          membersValue,
        }),
        variables: {
          repoName: repositoryName,
          ownerName: owner,
          endCursor: lastPersonIndex,
        },
      })
      .pipe(
        map((res) => {
          return res.data.repository.assignableUsers;
        })
      );
  }

  public getRepositoryInfo(
    repositoryName: string,
    owner: string
  ): Observable<RepositoryExtendedInfoModel> {
    return this.apollo
      .query<RepositoryInfoResponseModel>({
        query: this.queriesConsts.getRepositoryInfo,
        variables: {
          repoName: repositoryName,
          ownerName: owner,
        },
      })
      .pipe(
        map((res) => {
          return res.data.repository;
        })
      );
  }
}
