import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreflightPage } from './preflight';

@NgModule({
  declarations: [
    PreflightPage,
  ],
  imports: [
    IonicPageModule.forChild(PreflightPage),
  ],
  exports: [
    PreflightPage
  ]
})
export class PreflightPageModule {}
