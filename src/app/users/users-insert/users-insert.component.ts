import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/model/user';
import { UserService } from 'src/services/user-service';

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

  constructor(private userService: UserService)
  {}

  public submit()
  {
    // console.log("Masuk");
    // console.log(this.UserInsertForm.value.admin);
    
    let user = new User(
      0,
      this.UserInsertForm.value.name ?? "",
      this.UserInsertForm.value.name?.replaceAll(" ", "") ?? "",
      this.UserInsertForm.value.email ?? "",
      "123",
      "aaa"
    );

    this.userService.AddUser(user)
    .subscribe(res => {
      alert("Insert Success!");
    });
  }

  get name() { return this.UserInsertForm.get('name'); }

  get email() { return this.UserInsertForm.get('email'); }

}
