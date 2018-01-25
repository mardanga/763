import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AfterlandingPage } from './afterlanding';

@NgModule({
  declarations: [
    AfterlandingPage,
  ],
  imports: [
    IonicPageModule.forChild(AfterlandingPage),
  ],
  exports: [
    AfterlandingPage
  ]
})
export class AfterlandingPageModule {}
