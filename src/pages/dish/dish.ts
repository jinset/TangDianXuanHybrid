import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

import {DetailPage} from "../detail/detail"

@Component({
  selector: 'page-dish',
  templateUrl: 'dish.html'
})
export class DishPage {


  constructor(public navCtrl: NavController,public modalCtrl: ModalController){

  }

  ionViewDidLoad(){
    
  }

  goToDetail(dish) {
    let detailPage = this.modalCtrl.create(DetailPage, dish);
    detailPage.onDidDismiss(data => {
      console.log(data);
    });
    detailPage.present();
  }


  dishes: any[] = [
    {
      "name": "Fideos",
      "price": "2300",
      "descri": "Deliciosos fideos de la casa",
      "img": "assets/imgs/imgfood1.jpg"
    },
    {
      "name": "Carne con fideos",
      "price": "2500",
      "descri": "Deliciosos fideos de la casa",
      "img": "assets/imgs/imgfood2.jpg"
    },
    {
      "name": "Sopa miso",
      "price": "2500",
      "descri": "Sopa miso con carne y vegetales, opcional solo con verduras",
      "img": "assets/imgs/imgfood3.jpg"
    },
    {
      "name": "Fideos",
      "price": "1000",
      "descri": "Deliciosos fideos de la casa",
      "img": "assets/imgs/imgfood4.jpg"
    }
  ];

}
