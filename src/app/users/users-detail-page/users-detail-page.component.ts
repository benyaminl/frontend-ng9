import { Component, Input } from '@angular/core';
import { User } from 'src/model/user';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-users-detail-page',
  templateUrl: './users-detail-page.component.html',
  styleUrls: ['./users-detail-page.component.scss']
})
export class UsersDetailPageComponent {
  public d?: User;
  @Input('id') id?: number;
  
  constructor(private userService: UserService) {}

  public fetchUser() 
  {
    if (this.id == undefined) return;

    this.userService.GetUser(this.id)
      .subscribe(d => {
        this.d = d;
      });
  }

  public ngOnInit()
  {
    this.fetchUser();
  }
}
