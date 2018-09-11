import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { NavParams, ModalController } from "ionic-angular";

import { NewemailPage } from "../newemail-page/newemail-page";


/**
 * Generated class for the EmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-email-page',
  templateUrl: 'email-page.html',
})
export class EmailPage {

  currentEmail;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
    this.currentEmail = navParams.data;
  }

    showModal(type:string)
      {
        let modal = this.modalCtrl
                        .create(NewemailPage,{type:type,
                                                   mail:this.currentEmail});
        console.log("Hola?"+type);
        modal.present();
      }

}
