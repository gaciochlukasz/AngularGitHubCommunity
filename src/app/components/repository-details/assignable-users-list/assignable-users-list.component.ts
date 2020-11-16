import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NodesModel } from 'src/app/models/connection-types.model';
import { UserDefaultInfoModel } from 'src/app/models/user-info.model';
import { RepositoryService } from './../../../services/repository.service';
import { AppService } from './../../../services/app.service';
import { HelperService } from './../../../services/helper.service';
import { threadId } from 'worker_threads';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'scl-assignable-users-list',
  templateUrl: './assignable-users-list.component.html',
  styleUrls: ['./assignable-users-list.component.scss'],
})
export class AssignableUsersListComponent implements OnInit, OnDestroy {
  displayedColumns = ['avatar', 'name', 'login', 'email'];
  @Input() repoNameOwner: {
    repoName: string;
    repoOwner: string;
  };
  assignableUsersReq: Subscription;
  assignableUsersList: UserDefaultInfoModel[] = [];
  assignableUsers: MatTableDataSource<UserDefaultInfoModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private repositoryService: RepositoryService,
    private appService: AppService,
    private helperService: HelperService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAssignableUsersForRepository('');
  }

  ngOnDestroy(): void {
    this.repositoryService.assignableUsersLoaded = false;
    this.assignableUsersReq.unsubscribe();
  }

  goToUserDetails(login: string): void {
    this.router.navigate([`user-details/${login}`]);
  }

  private getAssignableUsersForRepository(lastCursor: string): void {
    this.assignableUsersReq = this.repositoryService
      .getAssignableUsersForRepository(
        this.repoNameOwner.repoName,
        this.repoNameOwner.repoOwner,
        lastCursor
      )
      .subscribe(
        (res: NodesModel<UserDefaultInfoModel>) => {
          const usersLoaded = !res.pageInfo.hasNextPage;
          res.nodes.forEach((elem) => {
            this.assignableUsersList.push(elem);
          });
          if (usersLoaded) {
            this.disableLoader();
            this.setList();
          }
        },
        (error) => {
          this.setList();
          this.disableLoader();
          this.helperService.openErrorInfo(
            'Error reading data. Not all assignable users loaded.'
          );
        }
      );
  }

  private setList(): void {
    this.assignableUsers = new MatTableDataSource(this.assignableUsersList);
    this.assignableUsers.paginator = this.paginator;
    this.assignableUsers.sort = this.sort;
  }

  private disableLoader(): void {
    this.repositoryService.assignableUsersLoaded = true;
    if (this.repositoryService.repoDetailLoaded) {
      this.appService.disableAppLoader();
    }
  }
}
