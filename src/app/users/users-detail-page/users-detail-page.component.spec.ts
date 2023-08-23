import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetailPageComponent } from './users-detail-page.component';

describe('UsersDetailPageComponent', () => {
  let component: UsersDetailPageComponent;
  let fixture: ComponentFixture<UsersDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersDetailPageComponent]
    });
    fixture = TestBed.createComponent(UsersDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
