// Third-party
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Queries } from '../graphQL/queries/get-contributors';

// Models
import { NodesModel } from '../models/connection-types.model';
import { MemberInfoModel } from '../models/member-info.model';
import { OrganizationResponseModel } from '../models/organization.model';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  loadingApp = new BehaviorSubject<boolean>(false);
  queriesConst = Queries;
  organizationId = null;

  constructor(private apollo: Apollo) {

  }

  public enableAppLoader(): void {
    this.loadingApp.next(true);
  }

  public disableAppLoader(): void {
    this.loadingApp.next(false);
  }

  public getContributors(
    lastPersonIndex: string
  ): Observable<NodesModel<MemberInfoModel>> {
    const variables = `${lastPersonIndex ? '$endCursor: String' : ''}`;
    const membersValue = `${lastPersonIndex ? 'after: $endCursor' : ''}`;
    return this.apollo
      .query<OrganizationResponseModel>({
        query: this.queriesConst.getContributors({ variables, membersValue }),
        variables: {
          pageSize: 20,
          endCursor: lastPersonIndex,
          orgId: this.organizationId,
        },
      })
      .pipe(
        map((response) => {
          return response.data.organization.membersWithRole;
        })
      );
  }
}
