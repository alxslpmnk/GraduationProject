import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import { ProfileComponent } from './profile/profile.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatsComponent } from './chats/chats.component';
import { RequestformComponent } from './requestform/requestform.component';
import { AdminComponent } from './admin/admin.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'profile', component: ProfileComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'chats', component: ChatsComponent},
  {path: 'requestform', component: RequestformComponent},
  {path: "admin", component: AdminComponent},
  {path: "add-user", component: AddUserComponent},
// otherwise redirect to home
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
