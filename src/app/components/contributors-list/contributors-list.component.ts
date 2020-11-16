// Third-party
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Materials
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

// Services
import { HelperService } from './../../services/helper.service';
import { AppService } from '../../services/app.service';

// Models
import { NodesModel } from 'src/app/models/connection-types.model';
import { MemberInfoModel } from 'src/app/models/member-info.model';

@Component({
  selector: 'scl-contributors-list',
  templateUrl: './contributors-list.component.html',
  styleUrls: ['./contributors-list.component.scss'],
})
export class ContributorsListComponent
  implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = [
    'avatar',
    'login',
    'name',
    'repositories',
    'gists',
    'followers',
    'contributionsCollection',
  ];
  members: MatTableDataSource<MemberInfoModel>;
  membersList: MemberInfoModel[] = [];
  getMembers = new Subscription();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private appService: AppService,
    private helperService: HelperService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    this.getMembers.unsubscribe();
  }
  
  ngAfterViewInit(): void {
    this.getContributors('');
    this.sort.sortChange.subscribe((data: Sort) => {
      this.members.data = this.sortItems(data);
    });
  }

  getContributors(lastPersonIndex: string): void {
    this.appService.enableAppLoader();
    this.getMembers.add(
      this.appService.getContributors(lastPersonIndex).subscribe(
        (res: NodesModel<MemberInfoModel>) => {
          const membersLoaded = !res.pageInfo.hasNextPage;
          res.nodes.forEach((elem) => {
            this.membersList.push(elem);
          });
          if (membersLoaded) {
            this.setList();
            this.appService.disableAppLoader();
          } else {
            this.getContributors(res.pageInfo.endCursor);
          }
        },
        () => {
          this.appService.disableAppLoader();
          this.setList();
          this.helperService.openErrorInfo(
            'Error reading contributors data. Not all contributors loaded.'
          );
        }
      )
    );
  }

  goToContributorDetails(login: string): void {
    this.router.navigate([`user-details/${login}`]);
  }

  private setList(): void {
    this.members = new MatTableDataSource(this.membersList);
    this.members.paginator = this.paginator;
    this.members.sort = this.sort;
  }

  sortItems(data: Sort): MemberInfoModel[] {
    return this.membersList.sort((a, b) => {
      let sort = null;
      if (data.active === 'contributionsCollection') {
        sort =
          data.direction === 'desc'
            ? b.contributionsCollection.totalCommitContributions -
              a.contributionsCollection.totalCommitContributions
            : a.contributionsCollection.totalCommitContributions -
              b.contributionsCollection.totalCommitContributions;
      } else {
        sort =
          data.direction === 'desc'
            ? b[`${data.active}`].totalCount - a[`${data.active}`].totalCount
            : a[`${data.active}`].totalCount - b[`${data.active}`].totalCount;
      }
      return sort;
    });
  }
}
