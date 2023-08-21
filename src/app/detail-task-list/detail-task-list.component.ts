import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { Task } from 'src/model/task';

@Component({
  selector: 'app-detail-task-list',
  templateUrl: './detail-task-list.component.html',
  styleUrls: ['./detail-task-list.component.scss']
})
export class DetailTaskListComponent {
  @Input("id") id: number = 0;

  public data: Task = new Task;

  constructor(private http: HttpClient) {}

  ngOnInit()
  {
    this.fetchData();
  }

  public fetchData()
  {
    if (this.id == 0) return;

    this.http
      .get<Task>("https://jsonplaceholder.typicode.com/todos/"+this.id.toString())
      .pipe(retry(3), catchError((err, caught) => 
      {
        return caught;
      }))
      .subscribe(r => {
        this.data = r;
      });
  }
}
