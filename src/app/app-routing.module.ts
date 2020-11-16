import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContributorsListComponent } from './components/contributors-list/contributors-list.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ContributorDetailsComponent } from './components/contributor-details/contributor-details.component';
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  {
    path: 'contributors-list',
    component: ContributorsListComponent,
  },
  { path: 'user-details/:login', component: ContributorDetailsComponent },
  { path: 'repo-details/:ownerName/:repoName', component: RepositoryDetailsComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
