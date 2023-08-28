import { EventEmitter, Injectable, Output } from '@angular/core';
import { of } from 'rxjs';

export interface AlertData 
{
  title: string;
  message: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertList: Array<AlertData> = [];
  @Output() onNewAlert = new EventEmitter();

  constructor() { }

  public info(message: string, title: string = "")
  {
    this.alert(message, title, "info");
  }

  public warning(message: string, title: string = "")
  {
    this.alert(message, title, "warning");
  }

  public error(message: string, title: string = "")
  {
    this.alert(message, title, "error");
  }

  public success(message: string, title: string = "")
  {
    this.alert(message, title, "success");
  }

  protected alert(message: string, title: string = "", type: string = "")
  {
    this.alertList.push({title: title, message: message, type: type});
    this.onNewAlert.emit();
  }

  public getAlertList()
  {
    return of(this.alertList);
  }

  public dismissAlert(i: number)
  {
    this.alertList.splice(i,1);
    this.onNewAlert.emit();
  }
}
