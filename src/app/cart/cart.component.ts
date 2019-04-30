import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories';
import { GetdataService } from '../service/getdataservice.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  private sub: any;
  public id: any;
  public allProducts: any;
  public product: any;
  public current: any;
  public name: string;
  public param: any;
  public temps:any;
  categoriesdata: Categories;
  allImages = [];
  allItems:any[];
  i = 0;
  constructor(public data: GetdataService) {
   
    this.data.getData().subscribe((value: Categories) => {
      

      this.product = this.categoriesdata;
      this.allProducts = value;

      //try {
      //  for (var i = 0; i < Object.keys(this.allProducts).length; i++) {

      //    for (var x = 0; x < Object.keys(this.allProducts[i].subcategories).length; x++) {
      //      for (var y = 0; y < Object.keys(this.allProducts[i].subcategories[x].items).length; y++) {

      //        this.temps = this.allProducts[i].subcategories[x].items[y];
      //        for (var i = 0; i < this.allItems.length; i++) {
      //          if (this.allProducts[i].subcategories[x].items[y].name == this.allItems[i]) {
      //            this.allItems[i] = this.temps;
      //          }

      //        }
      //      }
      //    }

      //  }
      //} catch (exeption) {
      //  console.log(exeption);
      //}
    });
    
  }
  ngOnInit() {
    this.data.getData().subscribe((value: Categories) => {
      this.categoriesdata = value;
    });
    $("#checkout").on("click", function () {             /*rubric51*/
      alert("Shipping details: free;  Total cost: 0€")

    }) 
  }

}
