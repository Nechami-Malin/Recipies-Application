import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { RecipeModule } from './recipe/recipe.module';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) },
    { path: 'login', loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) },
    { path: 'register', loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent) },
    { path: 'logOut', loadComponent: () => import('./log-out/log-out.component').then(c => c.LogOutComponent) },
    
    { path: 'recipies', loadChildren: () => import('./recipe/recipe.module').then(c => c.RecipeModule) },
    { path: '**', component: NotFoundComponent }

];
