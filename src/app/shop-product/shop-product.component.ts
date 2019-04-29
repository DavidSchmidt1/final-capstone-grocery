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


  public id: any;
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
      this.router.events.subscribe((event: Event) => {
        if (!!event && event instanceof RoutesRecognized) {
          this.param = event.state.root.firstChild.params;

          console.log('Query params are', this.param)
          
          
        }
      });

    });
    
  }

  public Back(event) {         
    this.location.back();
  }

  ngOnInit() {
    
    
   
    
  }
 
 
}
