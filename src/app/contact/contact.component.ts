import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  test: any;
  constructor() { }


  ngOnInit() {

    $("#sendAlert").on("click", function () {             /*rubric60*/
      alert("Send")

    }) 
  }

}
