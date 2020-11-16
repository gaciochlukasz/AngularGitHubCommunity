import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  concat,
  InMemoryCache,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';
import { AppConsts } from './consts/app.consts';

const uri = 'https://api.github.com/graphql';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: new HttpHeaders().set(
        AppConsts.headers.Authorization.name,
        AppConsts.headers.Authorization.value
      ),
    });

    return forward(operation);
  });

  return {
    link: concat(authMiddleware, httpLink.create({ uri })),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
