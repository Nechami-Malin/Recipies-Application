import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-out',
  standalone: true,
  imports: [],
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.scss'
})
export class LogOutComponent {
  constructor(private router: Router) { }
  ngOnInit() {
    this.logout()
  }
  logout() {
    Swal.fire({
      title: 'האם אתה בטוח שברצונך להתנתק?',
      showCancelButton: true,
      confirmButtonText: 'כן, התנתק',
      cancelButtonText: 'ביטול',
      cancelButtonColor: 'rgb(204, 0, 0)',
      confirmButtonColor: 'rgb(204, 0, 0)',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        alert("cleared the session")
        this.router.navigate(['/home']); // ניתוב לדף הבית
      }
      this.router.navigate(['/home']); // ניתוב לדף הבית

    });
  }
}
