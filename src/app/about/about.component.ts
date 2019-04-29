import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../service/getdataservice.service';
import { Categories } from '../models/categories';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  categoriesdata: Categories;
 

  constructor(public data: GetdataService) {
  }
  ngOnInit() {
    this.data.getData().subscribe((value: Categories) => {
      this.categoriesdata = value;
      

    });
  }

}
