import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { fileRequiredValidator } from 'src/shared/form-validators/file-required.validators';

interface FileUploadFormInterface
{
  files: FormControl
}

@Component({
  selector: 'app-file-upload-page',
  templateUrl: './file-upload-page.component.html',
  styleUrls: ['./file-upload-page.component.scss']
})
export class FileUploadPageComponent {
  public fileUploadForm: FormGroup<FileUploadFormInterface> = new FormGroup<FileUploadFormInterface>({
    files: new FormControl('', fileRequiredValidator())
  });

  ngOnInit() {
    this.fileUploadForm.valueChanges.subscribe((v) => {
      console.log(v);
    });
  }

  public Submit()
  {
    console.log(this.fileUploadForm.value.files);
  }

  public OnFileChange(event: Event)
  {
    // To Clear file select when... 
    // Cancel Select File
    if(event.type == "cancel") 
    {
      this.files?.markAsDirty();
      this.fileUploadForm.setValue({files: ''});
    }
    // console.log(event);
    // console.log(event.target);
    // let filesEl = event.target as HTMLInputElement;
    // let files = filesEl.files;
    // console.log(files);
  }

  get files() {
    return this.fileUploadForm.get('files');
  }
}
