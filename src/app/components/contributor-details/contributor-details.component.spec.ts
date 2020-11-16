import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorDetailsComponent } from './contributor-details.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RepositoryService } from 'src/app/services/repository.service';
import { HelperService } from './../../services/helper.service';
import { Overlay } from '@angular/cdk/overlay';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ContributorDetailsComponent', () => {
  let component: ContributorDetailsComponent;
  let fixture: ComponentFixture<ContributorDetailsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule ],
      declarations: [ContributorDetailsComponent],
      providers: [
        RepositoryService,
        HelperService,
        MatSnackBar,
        Overlay,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
