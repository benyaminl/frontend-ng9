import { CanActivateFn } from '@angular/router';

export const authorizationGuard: CanActivateFn = (route, state) => {
  console.log(route);
  return true;
};
