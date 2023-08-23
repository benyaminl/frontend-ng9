import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { RouterModule } from '@angular/router';
import { TaskComponent } from '../task/task.component';
import { TaskModule } from '../task/task.module';


@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TaskModule,
    // This is specific for component that transformed to..
    // a module, to be streamed individually
    // @see https://juristr.com/blog/2021/02/common-chunk-lazy-loading-angular-cli/
    RouterModule.forChild([
      {
        path: '',
        component: TaskListComponent,
        pathMatch: 'full'
      }
    ])
  ]
})
export class TaskListModule { }
