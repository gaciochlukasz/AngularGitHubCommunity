import { Overlay } from '@angular/cdk/overlay';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HelperService } from 'src/app/services/helper.service';

import { AssignableUsersListComponent } from './assignable-users-list.component';
import { RepositoryService } from './../../../services/repository.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('AssignableUsersListComponent', () => {
  let component: AssignableUsersListComponent;
  let fixture: ComponentFixture<AssignableUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule],
      declarations: [AssignableUsersListComponent],
      providers: [RepositoryService, HelperService, MatSnackBar, Overlay],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignableUsersListComponent);
    component = fixture.componentInstance;
    component.repoNameOwner = {
      repoName: '',
      repoOwner: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
