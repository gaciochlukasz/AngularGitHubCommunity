// Third-party
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Materials
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

// Components
import { MainPageComponent } from './components/main-page.component';
import { ContributorsListComponent } from './components/contributors-list/contributors-list.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LoaderComponent } from './commons/loader/loader.component';
import { ContributorDetailsComponent } from './components/contributor-details/contributor-details.component';
import { UserRepositoriesListComponent } from './components/contributor-details/user-repositories-list/user-repositories-list.component';
import { UserInfoCardComponent } from './components/contributor-details/user-info-card/user-info-card.component';
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';

// Pipes
import { NoDataPipe } from './pipes/no-data.pipe';
import { RepositoryDetailsPanelComponent } from './components/repository-details/repository-details-panel/repository-details-panel.component';
import { AssignableUsersListComponent } from './components/repository-details/assignable-users-list/assignable-users-list.component';
import { KbToMbPipe } from './pipes/kb-to-mb.pipe';

import './others/rxjs-compat';
@NgModule({
  declarations: [
    // Components
    MainPageComponent,
    ContributorsListComponent,
    WelcomePageComponent,
    LoaderComponent,
    ContributorDetailsComponent,
    UserRepositoriesListComponent,
    UserInfoCardComponent,
    RepositoryDetailsComponent,
    RepositoryDetailsPanelComponent,
    AssignableUsersListComponent,

    // Pipes
    NoDataPipe,
    KbToMbPipe
  ],
  exports: [
    // Components
    MainPageComponent,
    BrowserAnimationsModule,
    ContributorsListComponent,
    WelcomePageComponent,
    ContributorDetailsComponent,
    UserRepositoriesListComponent,
    UserInfoCardComponent,
    RepositoryDetailsComponent,
    RepositoryDetailsPanelComponent,

    // Modules
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatCardModule,

    // Pipes
    NoDataPipe,
    KbToMbPipe
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatCardModule,
  ]
})
export class ShareModule {}
