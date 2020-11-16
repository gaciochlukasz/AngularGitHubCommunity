export interface UserResponseModel {
  user: UserExtendedInfoModel;
}

export interface UserDefaultInfoModel {
  id: number;
  name: string;
  login: string;
  avatarUrl: string;
  email: string;
}

export interface UserExtendedInfoModel extends UserDefaultInfoModel {
  bio: string;
  location: string;
  company: string;
  projectsUrl: string;
  twitterUsername: string;
  url: string;
  websiteUrl: string;
  following: {
    totalCount: number;
  };
  followers: {
    totalCount: number;
  };
  gists: {
    totalCount: number;
  };
  contributionsCollection: {
    totalCommitContributions: number;
  };
  organizations: {
    nodes: {
      id: string;
      name: string;
    };
  };
  repositories: {
    totalCount: number;
  };
  repositoriesContributedTo: {
    totalCount: number;
  };
}
