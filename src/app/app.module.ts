import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailTaskListComponent } from './detail-task-list/detail-task-list.component';
import { UserService } from 'src/services/user-service';
import { TaskService } from 'src/services/task-service';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    TaskComponent,
    TaskListComponent,
    DetailTaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
