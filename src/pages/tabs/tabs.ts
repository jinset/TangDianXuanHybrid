import { Component } from '@angular/core';

import { DrinkPage } from '../drink/drink';
import { DessertPage } from '../dessert/dessert';
import { DishPage } from '../dish/dish';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DishPage;
  tab2Root = DrinkPage;
  tab3Root = DessertPage;

  constructor() {

  }
}
