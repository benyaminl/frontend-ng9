import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationComponent } from './animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AnimationComponent', () => {
  let component: AnimationComponent;
  let fixture: ComponentFixture<AnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationComponent],
      imports: [BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(AnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change/animate when button presses', () => {
    component.toggleOpenClose();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("div")?.style.backgroundColor).not.toEqual('red');
  });
});
