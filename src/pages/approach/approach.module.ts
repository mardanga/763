import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApproachPage } from './approach';

@NgModule({
  declarations: [
    ApproachPage,
  ],
  imports: [
    IonicPageModule.forChild(ApproachPage),
  ],
  exports: [
    ApproachPage
  ]
})
export class ApproachPageModule {}
