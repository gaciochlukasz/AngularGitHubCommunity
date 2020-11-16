export interface NodesModel<T> {
  nodes: T[];
  totalCount: number;
  pageInfo: PageInfoModel;
}

export interface PageInfoModel {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
}

export interface TotalCountModel {
  totalCount: number;
}
