import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path: 'home', component: HomeComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);