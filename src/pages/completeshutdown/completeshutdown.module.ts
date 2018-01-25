import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompleteshutdownPage } from './completeshutdown';

@NgModule({
  declarations: [
    CompleteshutdownPage,
  ],
  imports: [
    IonicPageModule.forChild(CompleteshutdownPage),
  ],
  exports: [
    CompleteshutdownPage
  ]
})
export class CompleteshutdownPageModule {}
