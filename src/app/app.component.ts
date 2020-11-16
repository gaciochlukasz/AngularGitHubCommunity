// Third-party
import { Component, OnInit } from '@angular/core';

// Services
import { AppService } from './services/app.service';
import { AppConfig } from './app.config';

@Component({
  selector: 'scl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService, private appConfig: AppConfig) {}

  ngOnInit(): void {
    this.appService.organizationId = this.appConfig.orgId;
  }
}
