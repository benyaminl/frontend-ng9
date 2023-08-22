import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInsertComponent } from './users-insert.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/services/user-service';

describe('UsersInsertComponent', () => {
  let component: UsersInsertComponent;
  let fixture: ComponentFixture<UsersInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
      declarations: [UsersInsertComponent],
      providers: [UserService],
    });
    fixture = TestBed.createComponent(UsersInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Submit UserInsertComponent', () => {
  let component: UsersInsertComponent;
  let fixture: ComponentFixture<UsersInsertComponent>;
  let srv: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
      declarations: [UsersInsertComponent],
      providers: [UserService],
    });
    fixture = TestBed.createComponent(UsersInsertComponent);
    component = fixture.componentInstance;
    srv = TestBed.inject(UserService);
    
    spyOn(srv, 'catchError').and.callThrough();

    fixture.detectChanges();
  });

  it('should able to submit data', (done: DoneFn) => {
    component.UserInsertForm.setValue({
      name: "Ben",
      admin: false,
      email: "ben@stts.edu"
    });

    component.submit();

    setTimeout(() => {
      expect(srv.catchError).not.toHaveBeenCalled();
      done();
    }, 1500);
  });

  it('should have empty data when blank with "" ', (done: DoneFn) => {
    // This is sad... I think this readonly... what a mess... 2 hours.. 
    component.UserInsertForm.value.admin = undefined;
    component.UserInsertForm.value.name = undefined;
    component.UserInsertForm.value.email = undefined;

    component.submit();

    setTimeout(() => {
      expect(srv.catchError).not.toHaveBeenCalled();
      done();
    }, 1500);
  });
})