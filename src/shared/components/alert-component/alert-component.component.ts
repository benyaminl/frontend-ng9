import { Component, OnInit } from '@angular/core';
import { AlertData, AlertService } from 'src/services/alert.service';

@Component({
  selector: 'app-alert-component',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})
export class AlertComponent implements OnInit {
  public alertList: AlertData[] = [];
  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.onNewAlert.subscribe(d => {
      this.fetchLatestAlert();
    });
  }

  public fetchLatestAlert()
  {
    this.alertService.getAlertList().subscribe(data => {
      this.alertList = data;
    });
  }

  public BtnDismiss(i: number)
  {
    this.alertService.dismissAlert(i);
  }
}
