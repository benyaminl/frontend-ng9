import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  public totalLike: number = 0;

  public addLike()
  {
    this.totalLike++;
  }  
}
