import { MemberResponseModel } from './member-info.model';

export interface OrganizationIdResponseModel {
  organization: OrganizationIdModel;
}

export interface OrganizationIdModel {
  id: string;
}

export interface OrganizationResponseModel {
  organization: OrganizationModel;
}


export interface OrganizationModel extends MemberResponseModel {
  id: string;
}
