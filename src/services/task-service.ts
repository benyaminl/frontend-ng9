import { catchError, retry } from 'rxjs';
import { Task } from 'src/model/task';
import { Service } from './service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class TaskService extends Service {    
    constructor(private http: HttpClient) {
        super();
    }

    public GetTaskList()
    {
        return this.http.get<Task[]>("https://jsonplaceholder.typicode.com/todos")
        .pipe(
            retry(3),
            catchError(this.catchError)
        );
    }

    public GetTask(id: number)
    {
        return this.http.get<Task>("https://jsonplaceholder.typicode.com/todos/" + id.toString())
        .pipe(
            retry(3),
            catchError(this.catchError)
        );
    }
}