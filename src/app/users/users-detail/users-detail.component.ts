import { Component, Input, ViewEncapsulation } from '@angular/core';
import { User } from 'src/model/user';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UsersDetailComponent {
  @Input("user") d?: User;

}
