import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController
  , menuCtrl: MenuController
  ) {
    menuCtrl.enable(true);
  }

}
