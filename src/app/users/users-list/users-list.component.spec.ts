import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/services/user-service';
import { User } from 'src/model/user';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [UsersListComponent],
      providers: [UserService],
    });
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain data after init', (done: DoneFn) => {
    component.ngOnInit();
    setTimeout(() => {
      expect(component.data.length).toBeGreaterThan(0);
      done();
    }, 2000);
  });
});

describe('UserService', () => {
  let srv: UserService;

  beforeEach(() => {
    // Prepare the Modules
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserService]
    });

    srv = TestBed.inject(UserService);
  });

  it('should return list data', (done: DoneFn) => {
    srv.GetUserList().subscribe(resp => {
      expect(resp.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should return individual data', (done: DoneFn) => {
    srv.GetUser(1).subscribe(resp => {
      expect(resp.id).not.toBeNull();
      done();
    });
  });

  it('should be ok add new user', (done: DoneFn) => {
    srv.AddUser(new User(0, "Aaa", "abc", "abc@google.com", "123", "halo.com"))
      .subscribe(resp => {
        expect(resp.hasOwnProperty("id")).toBeTrue();
        done();
      });
  });
});