import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const getProductlist = "https://localhost:7018/api/Products"
const getProductbyid = "https://localhost:7018/api/ProductTypes"

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  //productTypeId :any = ;

  

  getProducts()
  {
    console.log(this.http.get(getProductlist))
    return this.http.get(getProductlist);
  }
  getProductID()
  {
   // console.log(this.http.get(`${getProductbyid}/${productTypeId}`))
    return this.http.get(getProductbyid);
  }

}
