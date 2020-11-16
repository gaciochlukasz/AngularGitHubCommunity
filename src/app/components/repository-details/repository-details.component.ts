import { Component, OnDestroy, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RepositoryExtendedInfoModel } from 'src/app/models/repositories.model';
import { AppService } from './../../services/app.service';
import { HelperService } from './../../services/helper.service';

@Component({
  selector: 'scl-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss'],
  providers: [RepositoryService],
})
export class RepositoryDetailsComponent implements OnInit, OnDestroy {
  repoReq: Subscription;
  repoName: string;
  ownerName: string;
  repoDetails: RepositoryExtendedInfoModel;

  constructor(
    private repositoryService: RepositoryService,
    private helperService: HelperService,
    private appService: AppService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.appService.enableAppLoader();
    this.repoName = this.route.snapshot.paramMap.get('repoName');
    this.ownerName = this.route.snapshot.paramMap.get('ownerName');
    this.getRepoDetails();
  }

  ngOnDestroy(): void {
    this.repoDetails = null;
    this.repositoryService.repoDetailLoaded = false;
    this.repoReq.unsubscribe();
  }

  private getRepoDetails(): void {
    this.repoReq = this.repositoryService
      .getRepositoryInfo(this.repoName, this.ownerName)
      .subscribe(
        (res: RepositoryExtendedInfoModel) => {
          this.disableLoader();
          this.repoDetails = res;
        },
        (error) => {
          this.disableLoader();
          this.helperService.openErrorInfo(
            'Error reading data. Repository details not loaded.'
          );
        }
      );
  }

  private disableLoader(): void {
    this.repositoryService.repoDetailLoaded = true;
    if (this.repositoryService.assignableUsersLoaded) {
      this.appService.disableAppLoader();
    }
  }
}
