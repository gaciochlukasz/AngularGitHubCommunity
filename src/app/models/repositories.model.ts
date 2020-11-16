import { NodesModel } from './connection-types.model';
import { UserDefaultInfoModel } from './user-info.model';

export interface RepositoriesContributeToResponseModel {
  user: {
    repositoriesContributedTo: NodesModel<RepositoryDefaultInfoModel>;
  };
}

export interface RepositoryInfoResponseModel {
  repository: RepositoryExtendedInfoModel;
}

export interface AssignableUsersForRepositoryResponseModel {
  repository: AssignableUsersForRepositoryModel;
}

export interface RepositoryDefaultInfoModel {
  createdAt: Date;
  description: string;
  homepageUrl: string;
  name: string;
  owner: {
    id: string;
    login: string;
    avatarUrl: string;
  };
}

export interface RepositoryExtendedInfoModel
  extends RepositoryDefaultInfoModel {
  projectsUrl: string;
  sshUrl: string;
  url: string;
  diskUsage: number;
}

export interface AssignableUsersForRepositoryModel {
  assignableUsers: NodesModel<UserDefaultInfoModel>;
}
