import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { NavParams } from "ionic-angular";
import { ModalController } from 'ionic-angular'

import { Correos } from "../../providers/correos";
import { EmailPage } from "../email-page/email-page";
import { NewemailPage } from './../newemail-page/newemail-page';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-inbox-page',
  templateUrl: 'inbox-page.html',
})
export class InboxPage {

  listaCorreos:Object;
  emailpage = EmailPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public correos: Correos,
              public modalCtrl: ModalController)
  {
      this.listaCorreos = correos.lista;
  }

  goToEmail(correo)
    {
      this.navCtrl.push(this.emailpage, correo);
    }

  newMailFab()
    {
      let modal = this.modalCtrl
                        .create(NewemailPage,{type:'New Mail',
                                                   mail: ''});
        modal.present();
    }

}
