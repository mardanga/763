import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AftersePage } from './afterse';

@NgModule({
  declarations: [
    AftersePage,
  ],
  imports: [
    IonicPageModule.forChild(AftersePage),
  ],
  exports: [
    AftersePage
  ]
})
export class AftersePageModule {}
