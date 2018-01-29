import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecurePage } from './secure';

@NgModule({
  declarations: [
    SecurePage,
  ],
  imports: [
    IonicPageModule.forChild(SecurePage),
  ],
  exports: [
    SecurePage
  ]
})
export class SecurePageModule {}
