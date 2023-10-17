import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const getProductlist = "https://localhost:7018/api/Products"
const getProductbyid = "https://localhost:7018/api/Products/id"

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  getProducts()
  {
    console.log(this.http.get(getProductlist))
    return this.http.get(getProductlist);
  }
  getProductID()
  {
    console.log(this.http.get(getProductbyid)) 
    return this.http.get(getProductbyid);
  }

}
