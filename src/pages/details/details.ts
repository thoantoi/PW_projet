import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Result } from '../home/home';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})

export class DetailsPage { 
  result : Result;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.result = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

}
