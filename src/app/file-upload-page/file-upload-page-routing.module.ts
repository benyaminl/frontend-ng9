import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadPageComponent } from './file-upload-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: FileUploadPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadPageRoutingModule { }
