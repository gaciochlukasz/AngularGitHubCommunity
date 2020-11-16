// Third-party
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AppService } from './../services/app.service';

@Component({
  selector: 'scl-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  showLoader = false;
  constructor(private router: Router, public appService: AppService) { }

  ngOnInit(): void {
    this.appService.loadingApp.subscribe((status: boolean) => {
      setTimeout(() => {
        this.showLoader = status;
      });
    });
  }

  public goToMainPage(): void {
    this.router.navigate(['/welcome']);
  }

  public goToContributorsList(): void {
    this.router.navigate(['/contributors-list']);
  }
}
