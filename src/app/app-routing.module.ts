import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
// import { DetailTaskListComponent } from './tasks/detail-task-list/detail-task-list.component';
// import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'detail/:id', loadChildren: () => import("./tasks/detail-task-list/detail-task.module")
    .then((m) => m.DetailTaskModule) 
  },
  { path: '', loadChildren: () => import("./tasks/task-list/task-list.module")
    .then((m) => m.TaskListModule) 
  },
  { path: 'users', loadChildren: () => import("./users/users.module")
    .then((m) => m.UsersModule)
  },
  {
    path: 'animation', loadChildren: () => import("./animation/animation.module")
    .then((m) => m.AnimationModule)
  },
  {
    path:'login', loadChildren: () => import("./auth/auth.module")
    .then((m) => m.AuthModule)
  },
  {
    path:'upload', loadChildren: () => import('./file-upload-page/file-upload-page.module')
    .then((m) => m.FileUploadPageModule)
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
