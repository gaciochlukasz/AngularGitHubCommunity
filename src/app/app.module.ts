// Third-party
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppConfig } from './app.config';

// Modules
import { ShareModule } from './share.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';

export function onLoadApp(config: AppConfig): any {
  return () => config.loadApp();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShareModule, GraphQLModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: onLoadApp,
      deps: [AppConfig],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
