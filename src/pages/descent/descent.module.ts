import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescentPage } from './descent';

@NgModule({
  declarations: [
    DescentPage,
  ],
  imports: [
    IonicPageModule.forChild(DescentPage),
  ],
  exports: [
    DescentPage
  ]
})
export class DescentPageModule {}
