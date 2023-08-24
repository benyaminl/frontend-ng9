import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicPageRoutingModule } from './dynamic-page-routing.module';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { TaskDirective } from 'src/directives/task.directive';


@NgModule({
  declarations: [
    DynamicPageComponent,
    TaskDirective
  ],
  imports: [
    CommonModule,
    DynamicPageRoutingModule
  ]
})
export class DynamicPageModule { }
