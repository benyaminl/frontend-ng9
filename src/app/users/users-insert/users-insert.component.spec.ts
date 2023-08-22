import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInsertComponent } from './users-insert.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('UsersInsertComponent', () => {
  let component: UsersInsertComponent;
  let fixture: ComponentFixture<UsersInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
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
