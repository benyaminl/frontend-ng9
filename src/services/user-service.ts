import { Observable, catchError, retry, from } from 'rxjs';
import { User } from 'src/model/user';
import { Service } from './service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, query, setDoc, where } from '@angular/fire/firestore';

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
    // @see https://firebase.google.com/docs/firestore/query-data/get-data#web-modular-api_6
    const col = query(collection(this.firebase, 'users'), where("id", "==", id.toString()));

    return (collectionData(col))
        .pipe(catchError(this.catchError));
  }

  public AddUser(d: User)
  {
    // return this.http.post("https://jsonplaceholder.typicode.com/users/", d)
    //   .pipe(catchError(this.catchError));
    d.id = (Math.random() * 1000).toString();
    // @see https://stackoverflow.com/a/48158848/4906348
    const data = setDoc(doc(this.firebase,'users',(Math.random() * 10000).toString()), Object.assign({},d));
    return from(data);
  }
}