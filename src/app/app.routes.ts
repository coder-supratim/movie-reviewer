import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'movies', component: MoviesComponent},
    {path:'', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', component: LoginComponent }
];
