import { NodesModel, TotalCountModel } from './connection-types.model';
import { UserDefaultInfoModel } from './user-info.model';

export interface MemberInfoModel extends UserDefaultInfoModel {
  contributionsCollection: {
    totalCommitContributions: number;
  };
  repositories: TotalCountModel;
  followers: TotalCountModel;
  gists: TotalCountModel;
}

export interface MemberResponseModel {
  membersWithRole: NodesModel<MemberInfoModel>;
}
