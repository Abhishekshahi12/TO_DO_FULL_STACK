import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { error } from 'console';
import { ErrorComponent } from './error/error.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'welcome/:name', component:WelcomeComponent},
    {path:'login', component:LoginComponent},
    {path:'todos', component:ListToDoComponent},
    {path:'**', component:ErrorComponent}
];
