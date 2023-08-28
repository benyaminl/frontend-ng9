import { CanActivateFn } from '@angular/router';

export const authorizationGuard: CanActivateFn = (route, state) => {
  console.log(route.url);
  console.log(state.url);
  return true;
};
