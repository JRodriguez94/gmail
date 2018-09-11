import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from "ionic-angular";


import { Toast } from '../../providers/toast';

import { Correos } from '../../providers/correos';
import { Storage } from "@ionic/storage";
// import { IonicStorageModule } from '@ionic/storage';

@Component({
  selector: 'page-newemail-page',
  templateUrl: 'newemail-page.html',
})
export class NewemailPage {

    type:string;
    mail:any;

    nameMail:string = 'Josue Rodriguez';
    fromMail:string = 'Ako@Algo.com';
    toMail:string = '';
    subjectMail:string = '';
    newMail:string = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public toastCtrl: Toast,
              public correos: Correos,
              public storage: Storage)
  {
      this.type = navParams.get('type');
      this.mail = navParams.get('mail');

      if(this.type == 'Reply')
      {
        this.toMail = this.mail.emailAddress;
        this.subjectMail = 'Re: ' + this.mail.subject;
      }
      if (this.type == 'Forward')
      {
        this.subjectMail = this.mail.subject;
      }
  }

    close()
      {
          this.viewCtrl.dismiss();
      }

      send() {
          let mailSended = {
              name: this.nameMail,
              from: this.fromMail,
              toM: this.toMail,
              subject: this.subjectMail,
              message: this.newMail,
              date: new Date()
            }
            // console.log('Mensaje enviado');
            // console.log('De: ' + mailSended.name);
            // console.log('Para: '+ mailSended.toM);
            // console.log('Asunto: ' + mailSended.subject);
            // console.log('Mensaje: ' + mailSended.message);
            // console.log('Fecha ' + mailSended.date);

            this.correos.sended.push(mailSended);
            this.storage.set('mailsSended', this.correos.sended)
                        .then()
                        .catch(error => { console.log(error)});
            this.viewCtrl.dismiss();
            this.toastCtrl.crearToas('Email Sended');
      }

}
