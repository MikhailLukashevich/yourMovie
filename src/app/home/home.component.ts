import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { HomeItem } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  private items: HomeItem[] = [];
  private filter: string[] = [];

  constructor() {
  }

  ngOnInit() {


    this.items = [
      new HomeItem('Title1', 1, 'pic06', 'action', 1920),
      new HomeItem('Title2', 2, 'pic06', 'comedy', 1980),
      new HomeItem('Title3', 3, 'pic06', 'drama', 1920),
      new HomeItem('Title4', 4, 'pic06', 'action', 1920),
      new HomeItem('Title5', 5, 'pic06', 'comedy', 1950),
      new HomeItem('Title6', 6, 'pic06', 'documentary', 1920),
      new HomeItem('Title7', 7, 'pic06', 'action', 2001),
      new HomeItem('Title8', 8, 'pic06', 'drama', 1960),
      new HomeItem('Title9', 9, 'pic06', 'cartoons', 2000),
      new HomeItem('Title10', 10, 'pic06', 'action', 2015)
    ];
  }


  addFilter(item: string) {
    if (item && !_.includes(this.filter, item)) {
      this.filter.push(item);
    }
  }

  removeFilter(item: string) {
    this.filter = _.without(this.filter, item);
  }

  hideIcon(genre){
    if(genre && !_.includes(this.filter, genre)) {
      return true;
    } else return false;
  }

}
