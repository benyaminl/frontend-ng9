import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Task } from 'src/model/task';
import { TaskService } from 'src/services/task-service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  public data: Task[] = new Array();

  public constructor(private taskService: TaskService, private titleService: Title)
  {
    titleService.setTitle("Task List");
  }

  public fetchData()
  {
    this.taskService.GetTaskList()
      .subscribe(response => {
        this.data = response
      }); 
  }

  ngOnInit()
  {
    this.fetchData();
  }
}
