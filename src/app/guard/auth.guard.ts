import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/services/auth-service';

// This as a function, should be as class? It will be better when using DI on Class rather than inject() function
export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router: Router = inject(Router); // I don't thing this is good, but at least
  // We can inject it on canActivateFn when needed :/ 
  // @see https://angular.io/api/router/CanActivateFn#description
  // @see https://www.tutorialspoint.com/angular8/angular8_authentication_and_authorization.htm

  console.log(!authService.IsLoggedIn());
  console.log(route);
  if (state.url.toString() == "/users/add" && !authService.IsLoggedIn()) 
  {
    console.log("User must login!");
    return router.parseUrl("/login?msg=1&redirectUrl="+state.url);
  }

  return true;
};
