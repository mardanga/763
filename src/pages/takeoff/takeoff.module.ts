import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TakeoffPage } from './takeoff';

@NgModule({
  declarations: [
    TakeoffPage,
  ],
  imports: [
    IonicPageModule.forChild(TakeoffPage),
  ],
  exports: [
    TakeoffPage
  ]
})
export class TakeoffPageModule {}
