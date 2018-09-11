import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular'


import { Correos } from '../../providers/correos';
import {EmailPage} from "../email-page/email-page";
import {NewemailPage} from "../newemail-page/newemail-page";
import { Storage } from "@ionic/storage";
// import { IonicStorageModule } from '@ionic/storage';


/**
 * Generated class for the SendedMailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sended-mail-page',
  templateUrl: 'sended-mail-page.html',
})
export class SendedMailPage {

  sendedMailsList;
  emailpage = EmailPage;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public correos: Correos,
              public modalCtrl: ModalController,
              public storage: Storage) {
    // this.sendedMailsList = correos.sended;

  }

  ionViewWillEnter()
  {
    this.storage.get('mailsSended')
                .then((mailsSended)=>{
                  if(mailsSended == null) {
                    this.sendedMailsList = [];
                    this.correos.sended = [];
                  }
                  else{
                    this.sendedMailsList = mailsSended;
                    this.correos.sended = this.sendedMailsList;
                  }
                })
                .catch(error => {console.log(error);})
  }

  goToEmail(sendedMail)
  {
    this.navCtrl.push(this.emailpage, sendedMail);
  }


  newMailFab()
  {
    let modal = this.modalCtrl
      .create(NewemailPage,{type:'New Mail',
        mail: ''});
    modal.present();
  }

}
