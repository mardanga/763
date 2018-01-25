import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartenginesPage } from './startengines';

@NgModule({
  declarations: [
    StartenginesPage,
  ],
  imports: [
    IonicPageModule.forChild(StartenginesPage),
  ],
  exports: [
    StartenginesPage
  ]
})
export class StartenginesPageModule {}
