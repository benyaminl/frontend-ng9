import { catchError, retry } from 'rxjs';
import { User } from 'src/model/user';
import { Service } from './service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService extends Service {

  constructor(private http: HttpClient) {
    super();
  }

  public GetUserList()
  {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
      .pipe(
        retry(3),
        catchError(this.catchError)
      );
  }

  public GetUser(id: number)
  {
    return this.http.get<User>("https://jsonplaceholder.typicode.com/users/" + id.toString())
      .pipe(
        retry(3),
        catchError(this.catchError)
      );
  }

  public AddUser(d: User)
  {
    return this.http.post("https://jsonplaceholder.typicode.com/users/", d)
      .pipe(catchError(this.catchError));
  }
}