import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { Task } from 'src/model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
    constructor(private http: HttpClient) { }

    public GetTaskList()
    {
        return this.http.get<Task[]>("https://jsonplaceholder.typicode.com/todos")
        .pipe(
            retry(3),
            catchError((err, caught) => {
            console.log(err);
            console.log(caught);

            return caught;
            })
        );
    }

    public GetTask(id: number)
    {
        return this.http.get<Task>("https://jsonplaceholder.typicode.com/todos/" + id.toString())
        .pipe(
            retry(3),
            catchError((err, caught) => {
            console.log(err);
            console.log(caught);

            return caught;
            })
        );
    }
}