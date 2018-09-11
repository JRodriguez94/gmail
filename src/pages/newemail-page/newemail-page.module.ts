import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewemailPage } from './newemail-page';

@NgModule({
  declarations: [
    NewemailPage,
  ],
  imports: [
    IonicPageModule.forChild(NewemailPage),
  ],
})
export class NewemailPageModule {}
