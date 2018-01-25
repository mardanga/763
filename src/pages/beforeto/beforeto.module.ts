import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeforetoPage } from './beforeto';

@NgModule({
  declarations: [
    BeforetoPage,
  ],
  imports: [
    IonicPageModule.forChild(BeforetoPage),
  ],
  exports: [
    BeforetoPage
  ]
})
export class BeforetoPageModule {}
