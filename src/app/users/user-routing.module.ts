import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersInsertComponent } from './users-insert/users-insert.component';

const routes: Routes = [
    { path: '', component: UsersListComponent },
    { path: 'add', component: UsersInsertComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ]
})
export class UserRoutingModule { }
