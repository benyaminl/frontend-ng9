import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTaskListComponent } from './detail-task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from '../task/task.component';
import { Task } from 'src/model/task';
import { TaskService } from 'src/services/task-service';
import { UserService } from 'src/services/user-service';

describe('DetailTaskListComponent', () => {
  let component: DetailTaskListComponent;
  let fixture: ComponentFixture<DetailTaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [DetailTaskListComponent, TaskComponent],
      providers: [TaskService, UserService],
      // 
      teardown: {destroyAfterEach: false}
    });
    fixture = TestBed.createComponent(DetailTaskListComponent);
    component = fixture.componentInstance;
    component.id = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain id', () => {
    expect(component.id).toBeGreaterThan(0);
  });

  it('should be contain data after init', (done: DoneFn) =>
  {
    component.ngOnInit();
    setTimeout(() => {
      expect(component.data).not.toBeNull();
      expect(component.user).not.toBeNull();
      done();
    }, 2500);
  });

  it('should not work when passed id is strange', (done: DoneFn) => 
  {
    fixture = TestBed.createComponent(DetailTaskListComponent);
    component = fixture.componentInstance;
    component.id = -1;
    component.ngOnInit();

    setTimeout(() => {
      expect(component.data.id).toBeUndefined();
      // console.log(component.user)
      expect(component.user).toBeUndefined();
      done();
    }, 2500);
  });
});
