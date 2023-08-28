import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersInsertComponent } from './users-insert/users-insert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersDetailPageComponent } from './users-detail-page/users-detail-page.component';
import { UsersPageComponent } from './users-page/users-page.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UsersDetailComponent,
    UsersInsertComponent,
    UsersDetailPageComponent,
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
