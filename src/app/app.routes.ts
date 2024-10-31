import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { error } from 'console';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'login', component:LoginComponent},
    {path:'**', component:ErrorComponent}
];
