import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//--Páginas
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InboxPage } from "../pages/inbox-page/inbox-page";
import { EmailPage } from "../pages/email-page/email-page";
import { NewemailPage } from "../pages/newemail-page/newemail-page";
import { SendedMailPage } from '../pages/sended-mail-page/sended-mail-page';
// import { Storage } from "@ionic/storage";
import { IonicStorageModule } from '@ionic/storage';

//--Provider
import { Correos } from "../providers/correos";
import { Toast } from './../providers/toast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InboxPage,
    EmailPage,
    NewemailPage,
    SendedMailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InboxPage,
    EmailPage,
    NewemailPage,
    SendedMailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     Correos, Toast
  ]
})
export class AppModule {}
