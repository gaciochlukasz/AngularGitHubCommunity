import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepositoriesListComponent } from './user-repositories-list.component';
import { UserService } from './../../../services/user.service';
import { RepositoryService } from './../../../services/repository.service';
import { HelperService } from './../../../services/helper.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { Overlay } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserRepositoriesListComponent', () => {
  let component: UserRepositoriesListComponent;
  let fixture: ComponentFixture<UserRepositoriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule],
      declarations: [ UserRepositoriesListComponent ],
      providers: [RepositoryService, UserService, HelperService, MatSnackBar, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepositoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
