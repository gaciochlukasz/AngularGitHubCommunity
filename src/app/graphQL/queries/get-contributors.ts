import { gql } from 'apollo-angular';

export const Queries = {
  getAngularOrganizationId: gql`
    {
      organization(login: "angular") {
        id
      }
    }
  `,
  getContributors: (args: { variables: string; membersValue: string }) => {
    return gql`
      query getContributors($pageSize: Int!, ${args.variables}) {
        organization(login: "angular") {
          id
          membersWithRole(first: $pageSize, ${args.membersValue}) {
            nodes {
              id
              login
              name
              avatarUrl
              contributionsCollection {
                totalCommitContributions
              }
              repositories {
                totalCount
              }
              followers {
                totalCount
              }
              gists {
                totalCount
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
            totalCount
          }
        }
      }
    `;
  },
  getUser: gql`
    query getUserInfo($userLogin: String!) {
      user(login: $userLogin) {
        id
        name
        login
        avatarUrl
        bio
        location
        company
        email
        projectsUrl
        twitterUsername
        url
        websiteUrl
        following {
          totalCount
        }
        followers {
          totalCount
        }
        gists {
          totalCount
        }
        contributionsCollection {
          totalCommitContributions
        }
        organizations(first: 20) {
          nodes {
            name
          }
        }
        repositories {
          totalCount
        }
        repositoriesContributedTo {
          totalCount
        }
      }
    }
  `,
  getRepositoriesContributeTo: (args: {
    variables: string;
    membersValue: string;
  }) => {
    return gql`
      query getRepositoriesContributeTo($userName: String!, ${args.variables}) {
        user(login: $userName) {
          id
          repositoriesContributedTo(
            contributionTypes: [
              COMMIT
              REPOSITORY
              ISSUE
              PULL_REQUEST
              PULL_REQUEST_REVIEW
            ]
            first: 100
            ${args.membersValue}
            includeUserRepositories: false
          ) {
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
            nodes {
              createdAt
              description
              homepageUrl
              name
              owner {
                id
                login
              }
            }
            totalCount
          }
        }
      }
    `;
  },
  getAssignableUsersForRepository: (args: { variables: string; membersValue: string }) => {
    return gql`
      query getAssignableUsersForRepository($repoName: String!, $ownerName: String!, ${args.variables}) {
        repository(name: $repoName, owner: $ownerName) {
          id
          assignableUsers(
            first: 100
            ${args.membersValue}
            ) {
            totalCount
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
            nodes {
              avatarUrl
              login
              name
              email
            }
          }
        }
      }
    `;
  },
  getRepositoryInfo: gql`
      query getAssignableUsersForRepository($repoName: String!, $ownerName: String!) {
        repository(name: $repoName, owner: $ownerName) {
          id
          createdAt
          description
          homepageUrl
          name
          owner {
            login
            avatarUrl
          }
          projectsUrl
          sshUrl
          url
          diskUsage
        }
      }
    `,
};
