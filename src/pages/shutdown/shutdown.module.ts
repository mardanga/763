import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShutdownPage } from './shutdown';

@NgModule({
  declarations: [
    ShutdownPage,
  ],
  imports: [
    IonicPageModule.forChild(ShutdownPage),
  ],
  exports: [
    ShutdownPage
  ]
})
export class ShutdownPageModule {}
