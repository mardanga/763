import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClimbcruisePage } from './climbcruise';

@NgModule({
  declarations: [
    ClimbcruisePage,
  ],
  imports: [
    IonicPageModule.forChild(ClimbcruisePage),
  ],
  exports: [
    ClimbcruisePage
  ]
})
export class ClimbcruisePageModule {}
