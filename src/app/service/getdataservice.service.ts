import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  private categoriesdata: any;
  private imagesData: any[] = [];
  constructor(private http: HttpClient) { }

  public getData(): Observable<Categories> {
    this.categoriesdata = this.http.get<Categories>('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json'); /*rubric81*/
    return this.categoriesdata;
  }
  
}
