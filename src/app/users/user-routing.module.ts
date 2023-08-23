import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersInsertComponent } from './users-insert/users-insert.component';
import { UsersDetailPageComponent } from './users-detail-page/users-detail-page.component';
import { authGuard } from '../guard/auth.guard';

const routes: Routes = [
    { path: '', component: UsersListComponent },
    { path: 'add', component: UsersInsertComponent, canActivate: [authGuard]},
    { path: ':id', component: UsersDetailPageComponent, title: 'Detail User'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ]
})
export class UserRoutingModule { }
