import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { GetdataService } from '../service/getdataservice.service';
import { Categories } from '../models/categories';
import { Event, Router, RoutesRecognized } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.css']
})
export class ShopProductComponent implements OnInit {

  private sub: any;
  public id: any;
  public allProducts: any;
  public product: any;
  public current: any;
  public name: string;
  public param: any;
  categoriesdata: Categories;
  allImages = [];
  i = 0;

  constructor(private route: ActivatedRoute, private data: GetdataService, private router: Router, private location: Location) {
   
   
    this.product = this.param;
  
    this.data.getData().subscribe((value: Categories) => {
      this.categoriesdata = value[0].subcategories[0].items[0];

      this.product = this.categoriesdata;
      this.allProducts = value;
      

    });
    this.sub = this.route.params.subscribe(params => {
      this.param = params.name;

    });
    //for (var i = 0; i < 5; i++) {
    //  for (var x = 0; x < 6; x++) {
    //    for (var y = 0; y < 15; y++) {
    //      if (this.allProducts[i].subcategories[i].items[i].name == this.param) {
    //        this.product = this.allProducts[i].subcategories[i].items[i]
    //      }
    //    }
    //  }
    //}
    
  }

  public Back(event) {         
    this.location.back();
  }

  ngOnInit() {
    
    
   
    
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
 
 
}
