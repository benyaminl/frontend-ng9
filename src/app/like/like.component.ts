import { Component } from '@angular/core';
import { AlertService } from 'src/services/alert.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  public totalLike: number = 0;

  constructor(private alertService: AlertService) {}

  public addLike()
  {
    this.totalLike++;
    this.alertService.info("Like added +1 = "+this.totalLike.toString()+" Alert");
  }  
}
