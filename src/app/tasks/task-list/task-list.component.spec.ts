import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from '../task/task.component';
import { TaskService } from 'src/services/task-service';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TaskListComponent, TaskComponent]
    });
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain data after init', (done: DoneFn) =>
  {
    component.ngOnInit();
    setTimeout(() => {
      expect(component.data.length).toBeGreaterThan(0);
      done();
    }, 2000);
  });
  
});

describe('TaskService', () => {
  let srv: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TaskService]
    });
    srv = TestBed.inject(TaskService);
  });

  it('should return list of tasks', (done: DoneFn) => {
    srv.GetTaskList().subscribe(r => {
      expect(r.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should return individual tasks', (done: DoneFn) => {
    srv.GetTask(1).subscribe(r => {
      expect(r.id).not.toBeNull();
      done();
    });
  });
});