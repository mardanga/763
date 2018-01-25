import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeforesePage } from './beforese';

@NgModule({
  declarations: [
    BeforesePage,
  ],
  imports: [
    IonicPageModule.forChild(BeforesePage),
  ],
  exports: [
    BeforesePage
  ]
})
export class BeforesePageModule {}
