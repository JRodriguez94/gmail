import { Injectable } from "@angular/core";
import { ToastController, Button } from 'ionic-angular';

@Injectable()
export class Toast{
  constructor(public toastCtrl:ToastController){}

  crearToas(message)
  {
    let toast = this.toastCtrl.create(
      {
        message:message,
        duration: 3000,
        position: 'bottom'
      }
    );
    toast.present();
  }
}
