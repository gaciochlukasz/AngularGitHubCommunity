import { RepositoryDefaultInfoModel } from '../models/repositories.model';

export const repositoriesMocks = {
  repositoriesBeforeFiltering: [
    {
      description: 'E2E test framework for Angular apps',
      homepageUrl: 'http://www.protractortest.org',
      name: 'protractor',
      owner: {
        login: 'angular',
      },
    },
    {
      description:
        'Component infrastructure and Material Design components for Angular',
      homepageUrl: 'https://material.angular.io',
      name: 'components',
      owner: {
        login: 'angular',
      },
    },
    {
      description: 'A mobile app for scouting FRC competitions',
      homepageUrl: null,
      name: 'ScoutingApp',
      owner: {
        login: 'Team488',
      },
    },
  ] as RepositoryDefaultInfoModel[],
  repositoriesAfterFiltering: [
    {
      description: 'E2E test framework for Angular apps',
      homepageUrl: 'http://www.protractortest.org',
      name: 'protractor',
      owner: {
        login: 'angular',
      },
    },
    {
      description:
        'Component infrastructure and Material Design components for Angular',
      homepageUrl: 'https://material.angular.io',
      name: 'components',
      owner: {
        login: 'angular',
      },
    },
  ] as RepositoryDefaultInfoModel[]
};
