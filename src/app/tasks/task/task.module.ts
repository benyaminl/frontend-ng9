import { NgModule } from '@angular/core';

import { TaskComponent } from './task.component';

@NgModule({
    exports: [TaskComponent],
    declarations: [TaskComponent],
})
export class TaskModule { }
