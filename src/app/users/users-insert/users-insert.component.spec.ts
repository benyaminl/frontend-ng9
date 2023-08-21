import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInsertComponent } from './users-insert.component';

describe('UsersInsertComponent', () => {
  let component: UsersInsertComponent;
  let fixture: ComponentFixture<UsersInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersInsertComponent]
    });
    fixture = TestBed.createComponent(UsersInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
