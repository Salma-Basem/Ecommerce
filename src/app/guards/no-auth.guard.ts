import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
export const noAuthGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  if(!localStorage.getItem('token'))
    return true;
  else
  router.navigate(['/home'])
    return false
};
