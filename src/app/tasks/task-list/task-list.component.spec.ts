import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TaskComponent } from '../task/task.component';
import { TaskService } from 'src/services/task-service';
import { Observable, of, throwError } from 'rxjs';
import { Service } from 'src/services/service';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TaskListComponent, TaskComponent],
      providers: [TaskService],
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
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TaskService]
    });
    srv = TestBed.inject(TaskService);
    http = TestBed.inject(HttpClient);
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

describe('TaskService Error Test', () => {
  let srv: TaskService;
  let http: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // TestBed.configureTestingModule({
    //   imports: [HttpClientModule],
    //   providers: [Service, TaskService]
    // });
    http = jasmine.createSpyObj('HttpClient', ['get']);
    srv = new TaskService(http);
    
    const error = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
    
    // @see https://stackoverflow.com/a/53847581/4906348
    http.get.and.returnValue(throwError(() => error));
    spyOn(srv, 'catchError').and.callThrough();
  });

  it('should catch error when there are error : get list tasks', (done: DoneFn) => {

    srv.GetTaskList().subscribe({next: d => {
      console.log("Berhasil : " + JSON.stringify(d))
      done.fail("Expect error not success");
    }, error: Error => {
      console.log("Masuk Error : " + JSON.stringify(Error));
    }});

    setTimeout(() => {
      expect(srv.catchError).toHaveBeenCalled();
      done();
    }, 1500);
  });
});