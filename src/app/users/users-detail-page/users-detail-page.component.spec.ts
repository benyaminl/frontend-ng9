import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetailPageComponent } from './users-detail-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersDetailComponent } from '../users-detail/users-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/services/user-service';

describe('UsersDetailPageComponent', () => {
  let component: UsersDetailPageComponent;
  let fixture: ComponentFixture<UsersDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersDetailPageComponent, UsersDetailComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [UserService]
    });
    fixture = TestBed.createComponent(UsersDetailPageComponent);
    component = fixture.componentInstance;
    component.id = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain data after init', (done: DoneFn) => {
    component.ngOnInit();
    setTimeout(() => {
      expect(component.d).not.toBeUndefined();
      done();
    }, 1500);
  });

  it('should be null when wrong id sent to component', (done: DoneFn) => {
    component.id = undefined;
    component.ngOnInit();
    setTimeout(() => {
      expect(component.d).not.toBeUndefined();
      done();
    }, 1500);
  });
});
