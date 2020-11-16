import { ActivatedRoute } from '@angular/router';
import { MemberInfoModel } from '../models/member-info.model';

export const testingMock = {
  listOfContributorsBeforeSort: [
    {
      login: 'heathkit',
      name: 'Michael Giambalvo',
      avatarUrl:
        'https://avatars2.githubusercontent.com/u/9543?u=34b9a1892acad05c8b9398adcdf67b48b4399bc2&v=4',
      contributionsCollection: {
        totalCommitContributions: 11,
      },
      repositories: { totalCount: 51 },
      followers: { totalCount: 133 },
      gists: { totalCount: 5 },
    },
    {
      login: 'petebacondarwin',
      name: 'Pete Bacon Darwin',
      avatarUrl: 'https://avatars0.githubusercontent.com/u/15655?v=4',
      contributionsCollection: {
        totalCommitContributions: 527,
      },
      repositories: { totalCount: 182 },
      followers: { totalCount: 1135 },
      gists: { totalCount: 27 },
    },
    {
      login: 'jamesdaniels',
      name: 'James Daniels',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/44975?v=4',
      contributionsCollection: {
        totalCommitContributions: 50,
      },
      repositories: { totalCount: 119 },
      followers: { totalCount: 374 },
      gists: { totalCount: 35 },
    },
    {
      login: 'mvuksano',
      name: 'Marko Vuksanovic',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/52777?v=4',
      contributionsCollection: {
        totalCommitContributions: 0,
      },
      repositories: { totalCount: 66 },
      followers: { totalCount: 136 },
      gists: { totalCount: 24 },
    },
    {
      login: 'linclark',
      name: 'Lin Clark',
      avatarUrl:
        'https://avatars1.githubusercontent.com/u/105464?u=1147e26bf044b65cd0e150bb660d382a59516e77&v=4',
      contributionsCollection: {
        totalCommitContributions: 1,
      },
      repositories: { totalCount: 136 },
      followers: { totalCount: 1458 },
      gists: { totalCount: 15 },
    },
    {
      login: 'mhevery',
      name: 'Miško Hevery',
      avatarUrl: 'https://avatars0.githubusercontent.com/u/111951?v=4',
      contributionsCollection: {
        totalCommitContributions: 6621,
      },
      repositories: { totalCount: 67 },
      followers: { totalCount: 4194 },
      gists: { totalCount: 24 },
    },
  ] as MemberInfoModel[],
  listOfContributorsSorted: [
    {
      login: 'mvuksano',
      name: 'Marko Vuksanovic',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/52777?v=4',
      contributionsCollection: {
        totalCommitContributions: 0,
      },
      repositories: { totalCount: 66 },
      followers: { totalCount: 136 },
      gists: { totalCount: 24 },
    },
    {
      login: 'linclark',
      name: 'Lin Clark',
      avatarUrl:
        'https://avatars1.githubusercontent.com/u/105464?u=1147e26bf044b65cd0e150bb660d382a59516e77&v=4',
      contributionsCollection: {
        totalCommitContributions: 1,
      },
      repositories: { totalCount: 136 },
      followers: { totalCount: 1458 },
      gists: { totalCount: 15 },
    },
    {
      login: 'heathkit',
      name: 'Michael Giambalvo',
      avatarUrl:
        'https://avatars2.githubusercontent.com/u/9543?u=34b9a1892acad05c8b9398adcdf67b48b4399bc2&v=4',
      contributionsCollection: {
        totalCommitContributions: 11,
      },
      repositories: { totalCount: 51 },
      followers: { totalCount: 133 },
      gists: { totalCount: 5 },
    },
    {
      login: 'jamesdaniels',
      name: 'James Daniels',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/44975?v=4',
      contributionsCollection: {
        totalCommitContributions: 50,
      },
      repositories: { totalCount: 119 },
      followers: { totalCount: 374 },
      gists: { totalCount: 35 },
    },
    {
      login: 'petebacondarwin',
      name: 'Pete Bacon Darwin',
      avatarUrl: 'https://avatars0.githubusercontent.com/u/15655?v=4',
      contributionsCollection: {
        totalCommitContributions: 527,
      },
      repositories: { totalCount: 182 },
      followers: { totalCount: 1135 },
      gists: { totalCount: 27 },
    },
    {
      login: 'mhevery',
      name: 'Miško Hevery',
      avatarUrl: 'https://avatars0.githubusercontent.com/u/111951?v=4',
      contributionsCollection: {
        totalCommitContributions: 6621,
      },
      repositories: { totalCount: 67 },
      followers: { totalCount: 4194 },
      gists: { totalCount: 24 },
    },
  ] as MemberInfoModel[],
};
