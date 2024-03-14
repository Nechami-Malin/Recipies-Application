import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { DurationFormatPipe } from './pipe-time.pipe';
import { LogOutComponent } from './log-out/log-out.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HomeComponent, TopBarComponent, FooterComponent,FooterComponent,DurationFormatPipe,LogOutComponent,EditRecipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client-project';
}
