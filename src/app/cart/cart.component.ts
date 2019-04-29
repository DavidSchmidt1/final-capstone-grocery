import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories';
import { GetdataService } from '../service/getdataservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  categoriesdata: Categories;
  constructor(public data: GetdataService) {
  }
  ngOnInit() {
    this.data.getData().subscribe((value: Categories) => {
      this.categoriesdata = value;
    });
  }

}
