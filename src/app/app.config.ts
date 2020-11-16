import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { OrganizationIdResponseModel } from './models/organization.model';
import { Queries } from './graphQL/queries/get-contributors';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  queriesConst = Queries;
  orgId: string = null;
  constructor(private apollo: Apollo) {}

  loadApp(): any {
    return new Promise((resolve) => {
      this.apollo
        .query<OrganizationIdResponseModel>({
          query: this.queriesConst.getAngularOrganizationId,
        })
        .pipe(map((response) => response))
        .subscribe((res) => {
          this.orgId = res.data.organization.id;
          resolve(true);
        });
    });
  }
}
