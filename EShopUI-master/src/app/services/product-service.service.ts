import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const getProduct = "https://localhost:7018/api/Products"

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  getProducts()
  {
    console.log(this.http.get(getProduct))
    return this.http.get(getProduct);
  }

}
