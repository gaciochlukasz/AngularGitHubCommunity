import { Component, Input, OnInit } from '@angular/core';
import { RepositoryExtendedInfoModel } from 'src/app/models/repositories.model';

@Component({
  selector: 'scl-repository-details-panel',
  templateUrl: './repository-details-panel.component.html',
  styleUrls: ['./repository-details-panel.component.scss'],
})
export class RepositoryDetailsPanelComponent implements OnInit {
  @Input() repoDetails: RepositoryExtendedInfoModel;
  constructor() {}

  ngOnInit(): void {}
}
