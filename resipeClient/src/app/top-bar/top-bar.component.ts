import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MenubarModule } from 'primeng/menubar'
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatIconModule,
    MatButtonModule, RouterOutlet, RouterModule ,NgbModule,
    MenubarModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {

}
