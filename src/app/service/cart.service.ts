import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  counter: number;
  currentnumber: number;
  temp: string;
  array: string[];
  constructor() {
    this.counter = 0;
  }
  SetNewItem(item: string) {
    localStorage.setItem(this.counter.toString(), item);
    this.counter = this.counter + 1;
    
    

  }
  GetItems():string[] {
    for (var i = 0; i < localStorage.length; i++) {
      this.temp = localStorage.getItem(i.toString());
      this.array[i] = this.temp;
    }
    return this.array;


  }

}
