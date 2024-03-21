import { CanActivateFn } from '@angular/router';
import Swal from 'sweetalert2';

export const recipeGuard: CanActivateFn = (route, state) => {
  console.log(sessionStorage.getItem('userInfo'));
  
  if (sessionStorage.getItem('userInfo')) {

     return true;
  }
  else {
    Swal.fire({
      title: "Toy cannot view the recipe since u have'nt login",
      icon: 'warning',
      confirmButtonText: 'confirm'
    })
    return false;
  }
};
