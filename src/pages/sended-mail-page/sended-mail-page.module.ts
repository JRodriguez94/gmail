import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendedMailPage } from './sended-mail-page';

@NgModule({
  declarations: [
    SendedMailPage,
  ],
  imports: [
    IonicPageModule.forChild(SendedMailPage),
  ],
})
export class SendedMailPageModule {}
