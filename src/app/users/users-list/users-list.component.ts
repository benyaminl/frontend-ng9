import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { User } from 'src/model/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  public data: User[] = new Array;

  constructor(private http: HttpClient) {}

  public getData()
  {
    this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
      .pipe(
        retry(3),
        catchError((err, caught) => {
          console.log(err);
          console.log(caught);

          return caught;
        })
      )
      .subscribe(response => {
        this.data = response
      });
  }

  ngOnInit()
  {
    this.getData();
  }
}
