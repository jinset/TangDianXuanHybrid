import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  private name:string;
  private img:string;
  private price:string;
  private descri:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
    this.name = navParams.get("name");
    this.img = navParams.get("img");
    this.price = navParams.get("price");
    this.descri = navParams.get("descri");
  }

  ionViewDidLoad() {
    console.log('first');
  }

  ionViewWillEnter() {
    console.log('');
  }

  back(){
    this.viewCtrl.dismiss();
  }

}
