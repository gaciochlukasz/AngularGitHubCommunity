import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryDetailsPanelComponent } from './repository-details-panel.component';

describe('RepositoryDetailsPanelComponent', () => {
  let component: RepositoryDetailsPanelComponent;
  let fixture: ComponentFixture<RepositoryDetailsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryDetailsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryDetailsPanelComponent);
    component = fixture.componentInstance;
    component.repoDetails = null;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
