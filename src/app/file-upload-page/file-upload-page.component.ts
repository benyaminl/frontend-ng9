import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { fileRequiredValidator } from 'src/shared/form-validators/file-required.validators';

// interface FileUploadFormInterface
// {
//   files: FormControl
// }

@Component({
  selector: 'app-file-upload-page',
  templateUrl: './file-upload-page.component.html',
  styleUrls: ['./file-upload-page.component.scss']
})
export class FileUploadPageComponent {
  public fileUploadForm: FormGroup = new FormGroup({
    files: new FormArray([]),
    individualFile: new FormControl('', [fileRequiredValidator()])
  });

  ngOnInit() {
    // this.fileUploadForm.valueChanges.subscribe((v) => {
    //   console.log(v);
    // });
  }

  public AddFileUploadField()
  {
    let files = this.fileUploadForm.controls['files'] as FormArray;
    files.push(new FormGroup({file: new FormControl('', [fileRequiredValidator()])}));
    console.log(files);
  }

  public Submit()
  {
    console.log(this.fileUploadForm);
  }

  public OnFileChangeIndividual(event: Event)
  {
    if(event.type == "cancel") 
    {
      this.fileUploadForm.controls['individualFile'].markAsDirty();
      this.fileUploadForm.setValue({individualFile: '', files: this.fileUploadForm.value.files});
    }
    console.log(this.fileUploadForm.value);
  }

  public OnFileChange(event: Event, ix: number)
  {
    // To Clear file select when... 
    // Cancel Select File
    if(event.type == "cancel") 
    {
      this.filesArray[ix].controls['file'].markAsDirty();
      this.filesArray[ix].setValue({file: ''});
      console.log(this.filesArray[ix].value);
      // SUCK HACK
      (event.target as HTMLInputElement).value = "";
    }
    // console.log(event);
    // console.log(event.target);
    // let filesEl = event.target as HTMLInputElement;
    // let files = filesEl.files;
    // console.log(files);
  }

  get files() {
    return this.fileUploadForm.get('files') as FormArray;
  }

  get filesArray() : FormGroup[]
  {
    return this.files?.controls as FormGroup[];
  }
}
