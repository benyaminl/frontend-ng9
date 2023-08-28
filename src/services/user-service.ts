import { Observable, catchError, retry } from 'rxjs';
import { User } from 'src/model/user';
import { Service } from './service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService extends Service {

  constructor(private http: HttpClient, private firebase: Firestore) {
    super();
  }

  public GetUserList()
  {
    const col = collection(this.firebase, 'users');
    return (collectionData(col) as Observable<User[]>)
      .pipe(catchError(this.catchError));
  }

  public GetUser(id: number)
  {
    const col = query(collection(this.firebase, 'users'), where("id", "==", id.toString()));

    return (collectionData(col))
        .pipe(catchError(this.catchError));
  }

  public AddUser(d: User)
  {
    return this.http.post("https://jsonplaceholder.typicode.com/users/", d)
      .pipe(catchError(this.catchError));
  }
}