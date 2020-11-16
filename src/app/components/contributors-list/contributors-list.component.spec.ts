import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ContributorsListComponent } from './contributors-list.component';
import { testingMock } from '../../mocks/contributors-list.mocks';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HelperService } from 'src/app/services/helper.service';
import { Overlay } from '@angular/cdk/overlay';
import { MatSort } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';

describe('ContributorsListComponent', () => {
  let component: ContributorsListComponent;
  let fixture: ComponentFixture<ContributorsListComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule],
      declarations: [ContributorsListComponent, MatSort],
      providers: [HelperService, MatSnackBar, Overlay],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort list', () => {
    const contributorsList = fixture.componentInstance;
    contributorsList.membersList = testingMock.listOfContributorsBeforeSort;
    const sortedList = contributorsList.sortItems({
      active: 'contributionsCollection',
      direction: 'asc',
    });
    expect(sortedList).toEqual(testingMock.listOfContributorsSorted);
  });
});
