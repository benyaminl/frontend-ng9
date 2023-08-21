import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { Task } from 'src/model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  public data: Task[] = new Array();

  public constructor(private http: HttpClient)
  {}

  public fetchData()
  {
    this.http.get<Task[]>("https://jsonplaceholder.typicode.com/todos")
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
    this.fetchData();
  }
}
