/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HelperService } from './helper.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { repositoriesMocks } from './../mocks/repositories-list.mock';

describe('Service: Helper', () => {
  let helperService: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelperService, MatSnackBar, Overlay]
    });
    helperService = TestBed.inject(HelperService);
  });

  it('should be create', () => {
    expect(helperService).toBeTruthy();
  });

  it('should be filter list by name angular', () => {
    const repoAfterFilting = helperService.filterRepoByOwner('angular', repositoriesMocks.repositoriesBeforeFiltering);
    expect(repoAfterFilting).toEqual(repositoriesMocks.repositoriesAfterFiltering);
  });
});
