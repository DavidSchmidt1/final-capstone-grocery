import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { trigger, transition, animate, style } from '@angular/animations'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GetdataService } from '../service/getdataservice.service';
import { Categories } from '../models/categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

//data members
export class HomeComponent implements OnInit {

  count: number;
  categoriesdata: Categories;
  currentcat: number;
  currentsubcat: number;
  constructor(public data: GetdataService) {
  }
  ngOnInit() {
    this.data.getData().subscribe((value: Categories) => {
      this.categoriesdata = value;
      
    });
    


  }
  
}

