import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailTaskListComponent } from './detail-task-list.component';
import { RouterModule } from '@angular/router';
import { TaskModule } from '../task/task.module';

@NgModule({
  declarations: [
    DetailTaskListComponent
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
          component: DetailTaskListComponent,
          pathMatch: 'full'
        }
      ])
  ]
})
export class DetailTaskModule { }
