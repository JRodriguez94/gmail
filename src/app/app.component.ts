import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { InboxPage } from "../pages/inbox-page/inbox-page";
import { SendedMailPage } from '../pages/sended-mail-page/sended-mail-page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = InboxPage;
  inboxPage = InboxPage;
  sendedPage = SendedMailPage;
  unreadedInbox = 7;

  @ViewChild('nav') menu : NavController;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page)
  {
    this.menu.setRoot(page);
    this.menuCtrl.close();
  }
}
