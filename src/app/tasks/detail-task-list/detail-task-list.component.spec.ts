import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTaskListComponent } from './detail-task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from '../task/task.component';

describe('DetailTaskListComponent', () => {
  let component: DetailTaskListComponent;
  let fixture: ComponentFixture<DetailTaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [DetailTaskListComponent, TaskComponent]
    });
    fixture = TestBed.createComponent(DetailTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
