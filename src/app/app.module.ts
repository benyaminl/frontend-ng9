import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
// import { TaskComponent } from './task/task.component';
// import { TaskListComponent } from './task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
// import { DetailTaskListComponent } from './tasks/detail-task-list/detail-task-list.component';
import { UserService } from 'src/services/user-service';
import { TaskService } from 'src/services/task-service';
import { AlertService } from 'src/services/alert.service';
import { AlertComponent } from 'src/shared/components/alert-component/alert-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, TaskService, AlertService, provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
