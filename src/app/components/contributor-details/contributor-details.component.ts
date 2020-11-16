// Third-party
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserExtendedInfoModel } from './../../models/user-info.model';
import { Subscription } from 'rxjs';

// Services
import { AppService } from './../../services/app.service';
import { UserService } from './../../services/user.service';
import { HelperService } from './../../services/helper.service';

@Component({
  selector: 'scl-contributor-details',
  templateUrl: './contributor-details.component.html',
  styleUrls: ['./contributor-details.component.scss'],
  providers: [UserService],
})
export class ContributorDetailsComponent implements OnInit, OnDestroy {
  userReq: Subscription;
  userLogin: string;
  userInfo: UserExtendedInfoModel;

  constructor(
    private appService: AppService,
    private userService: UserService,
    private helperService: HelperService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userLogin = this.route.snapshot.paramMap.get('login');
    this.appService.enableAppLoader();
    this.getUserInfo();
  }

  ngOnDestroy(): void {
    this.userReq.unsubscribe();
    this.userInfo = null;
    this.userService.user = null;
    this.userService.repositories = null;
  }

  getUserInfo(): void {
    this.userReq = this.userService
      .getUserInfo(this.userLogin, this.appService.organizationId)
      .subscribe((res: UserExtendedInfoModel) => {
        this.userService.user = res;
        this.userInfo = res;
        this.appService.disableAppLoader();
      }, (error) => {
        this.appService.disableAppLoader();
        this.helperService.openErrorInfo('Error reading user data');
      });
  }
}
