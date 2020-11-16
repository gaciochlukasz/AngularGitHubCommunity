// Third-party
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// Models
import { RepositoryDefaultInfoModel } from '../../../models/repositories.model';

// Services
import { HelperService } from './../../../services/helper.service';
import { UserService } from './../../../services/user.service';
import { NodesModel } from 'src/app/models/connection-types.model';

@Component({
  selector: 'scl-user-repositories-list',
  templateUrl: './user-repositories-list.component.html',
  styleUrls: ['./user-repositories-list.component.scss'],
})
export class UserRepositoriesListComponent implements OnInit, OnDestroy {
  displayedColumns = ['name', 'descriptions', 'createAt'];
  @Input() userLogin: string;
  repoReq: Subscription;
  repositories: MatTableDataSource<RepositoryDefaultInfoModel>;
  repositoriesList: RepositoryDefaultInfoModel[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService,
    private helperService: HelperService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRepos('');
  }

  ngOnDestroy(): void {
    this.repoReq.unsubscribe();
    this.repositories = null;
    this.userService.repositories = null;
  }

  getRepos(lastCursor: string): void {
    this.repoReq = this.userService
      .getUserRepositories(this.userLogin, lastCursor)
      .subscribe(
        (res: NodesModel<RepositoryDefaultInfoModel>) => {
          const reposietoriesLoaded = !res.pageInfo.hasNextPage;
          res.nodes.forEach((elem) => {
            this.repositoriesList.push(elem);
          });
          if (reposietoriesLoaded) {
            // const list = this.helperService.filterRepoByOwner('angular', this.repositoriesList);
            // this.repositoriesList = list;
            this.setReposList();
          } else {
            this.getRepos(res.pageInfo.endCursor);
          }
        },
        (error) => {
          this.helperService.openErrorInfo('Error reading repositories data. Not all repositories loaded.');
          this.setReposList();
        }
      );
  }

  setReposList(): void {
    this.repositories = new MatTableDataSource(this.repositoriesList);
    this.repositories.paginator = this.paginator;
    this.repositories.sort = this.sort;
  }

  goToRepositoryDetails(repoName: string, owner: string): void {
    this.router.navigate([`repo-details/${owner}/${repoName}`]);
  }
}
