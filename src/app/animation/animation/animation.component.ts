import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger("openClose",[
      state("open", style({
        backgroundColor: 'lightblue',
        height: '200px',
        width: '100px'
      })),
      state("close", style({
        backgroundColor: 'red',
        color: 'white',
        height: '100px',
        width: '100px'
      })),
      transition('open => close', [
        animate('1s')
      ]),
      transition('close => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AnimationComponent {
  public isOpen: boolean = false;

  constructor(private titleServce: Title)
  {
    titleServce.setTitle("Animation Example");
  }

  public toggleOpenClose()
  {
    this.isOpen = !this.isOpen;
  }
}
