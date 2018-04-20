import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

import {DetailPage} from "../detail/detail"

@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html'
})
export class DrinkPage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }

  ionViewWillEnter() 
  {
  }

  goToDetail(dish) {
    let detailPage = this.modalCtrl.create(DetailPage, dish);
    detailPage.onDidDismiss(data => {
      console.log(data);
    });
    detailPage.present();
  }


  drinks: any[] = [
    {
      "name": "Gaseosa",
      "price": "800",
      "descri": "Bebidas gaseosas, coca-cola, sprite, fanta, entre otros",
      "img": "assets/imgs/drinksimg1.jpg"
    },
    {
      "name": "Cafe negro",
      "price": "800",
      "descri": "Cafe 100% costarricense",
      "img": "assets/imgs/drinksimg3.jpg"
    },
    {
      "name": "Refresco natural",
      "price": "1000",
      "descri": "A base de agua, refresco natural en diferentes opciones",
      "img": "assets/imgs/drinksimg4.jpg"
    }
  ];

}
