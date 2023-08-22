import { Component } from '@angular/core';
import { User } from 'src/model/user';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  public data: User[] = new Array;

  constructor(private userService: UserService) {}

  public getData()
  {
    this.userService
      .GetUserList()
      .subscribe(response => {
        this.data = response
      });
  }

  ngOnInit()
  {
    this.getData();
  }
}
