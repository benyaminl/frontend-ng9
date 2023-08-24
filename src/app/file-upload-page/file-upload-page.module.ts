import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadPageRoutingModule } from './file-upload-page-routing.module';
import { FileUploadPageComponent } from './file-upload-page.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { CustomDirectiveModule } from 'src/directive/custom-directive.module';


@NgModule({
  declarations: [
    FileUploadPageComponent
  ],
  imports: [
    CommonModule,
    FileUploadPageRoutingModule,
    ReactiveFormsModule,
    // CustomDirectiveModule
  ]
})
export class FileUploadPageModule { }
