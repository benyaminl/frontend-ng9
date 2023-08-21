import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { DetailTaskListComponent } from './detail-task-list/detail-task-list.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'detail/:id', component: DetailTaskListComponent },
  { path: '', component: TaskListComponent },
  { path: 'users', loadChildren: () => import("./users/users.module")
    .then((m) => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ]
})
export class AppRoutingModule { }
