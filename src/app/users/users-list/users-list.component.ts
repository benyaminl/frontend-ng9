import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from 'src/model/user';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  public data: User[] = new Array;

  constructor(private userService: UserService, private titleService: Title) {
    titleService.setTitle("List User")
  } 

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
