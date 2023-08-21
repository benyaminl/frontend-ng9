import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTaskListComponent } from './detail-task-list.component';

describe('DetailTaskListComponent', () => {
  let component: DetailTaskListComponent;
  let fixture: ComponentFixture<DetailTaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailTaskListComponent]
    });
    fixture = TestBed.createComponent(DetailTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
