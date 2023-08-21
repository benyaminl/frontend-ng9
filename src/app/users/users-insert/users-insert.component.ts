import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';

interface UserInsertFormModel 
{
  name: FormControl<string>; 
  email: FormControl<string>; 
  admin: FormControl<boolean>;
}

@Component({
  selector: 'app-users-insert',
  templateUrl: './users-insert.component.html',
  styleUrls: ['./users-insert.component.scss']
})
export class UsersInsertComponent {
  public UserInsertForm: FormGroup<UserInsertFormModel> = new FormGroup<UserInsertFormModel>({
    name: new FormControl("", {nonNullable: true, validators:[Validators.required]}),
    email: new FormControl("", {nonNullable: true, validators:[Validators.required, Validators.minLength(4), Validators.email]}),
    admin: new FormControl(false, {nonNullable: true})
  });

  constructor(private http: HttpClient)
  {}

  public submit()
  {
    console.log("Masuk");
    console.log(this.UserInsertForm.value.admin);

    this.http.post("https://jsonplaceholder.typicode.com/users/", 
      this.UserInsertForm.value)
    .pipe(catchError((err, caught) => {
      console.log(err);
      return caught
    }))
    .subscribe(res => {
      alert("Insert Success!");
    });
  }

  get name() { return this.UserInsertForm.get('name'); }

  get email() { return this.UserInsertForm.get('email'); }

}
