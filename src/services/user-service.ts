import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    public GetUserList()
    {
      return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
        .pipe(
          retry(3),
          catchError((err, caught) => {
            console.log(err);
            console.log(caught);

            return caught;
          })
        );
    }

    public GetUser(id: number)
    {
      return this.http.get<User>("https://jsonplaceholder.typicode.com/users/" + id.toString())
        .pipe(
          retry(3),
          catchError((err, caught) => {
            console.log(err);
            console.log(caught);

            return caught;
          })
        );
    }

    public AddUser(d: User)
    {
      return this.http.post("https://jsonplaceholder.typicode.com/users/", d)
        .pipe(catchError((err, caught) => {
          console.log(err);
          return caught;
        }));
    }
}