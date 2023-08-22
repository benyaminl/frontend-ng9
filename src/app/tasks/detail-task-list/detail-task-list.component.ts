import { Component, Input } from '@angular/core';
import { Task } from 'src/model/task';
import { User } from 'src/model/user';
import { TaskService } from 'src/services/task-service';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-detail-task-list',
  templateUrl: './detail-task-list.component.html',
  styleUrls: ['./detail-task-list.component.scss']
})
export class DetailTaskListComponent {
  @Input("id") id: number = 0;

  public data: Task = new Task;
  public user?: User;

  constructor(private taskService: TaskService, private userService: UserService) {}

  ngOnInit()
  {
    var taskDetail = this.fetchDataTask();
    
    taskDetail?.add(() => {
      this.fetchDataUser();
    });
  }

  public fetchDataTask()
  {
    if (this.id <= 0) return;

    return this.taskService.GetTask(this.id)
      .subscribe(r => {
        this.data = r;
      });
  }

  public fetchDataUser()
  {
    if(this.data.userId == undefined) return;

    this.userService.GetUser(this.data.userId ?? 0)
      .subscribe(r => {
        this.user = r;
      });
  }
}
