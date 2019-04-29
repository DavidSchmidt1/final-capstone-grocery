import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories';
import { GetdataService } from '../service/getdataservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export  class ShopComponent implements OnInit {
  count: number;
  categoriesdata: Categories;
  currentcat: number;
  currentsubcat:number;
  public show: boolean = false;
  constructor(public data: GetdataService) {
  }
  ngOnInit() {
    this.data.getData().subscribe((value: Categories) => {
      this.categoriesdata = value;
      this.count = 0;
      this.currentcat = 0;
      this.currentsubcat = 0;

    });
    this.count = 0;
    this.currentcat = 0;
    this.currentsubcat = 0;
    
    
  }

  public change(event: any, i: number) {

   

  }
  
  counter(i:number,j:number) {
    this.currentcat = i;
    this.currentsubcat = j;
  }
}



