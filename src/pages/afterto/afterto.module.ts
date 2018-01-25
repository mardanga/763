import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AftertoPage } from './afterto';

@NgModule({
  declarations: [
    AftertoPage,
  ],
  imports: [
    IonicPageModule.forChild(AftertoPage),
  ],
  exports: [
    AftertoPage
  ]
})
export class AftertoPageModule {}
