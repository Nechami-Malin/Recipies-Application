import { CanActivateFn } from '@angular/router';

export const changeRecipeGuard: CanActivateFn = (route, state) => {
  return true;
};
