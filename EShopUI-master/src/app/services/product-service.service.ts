import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const getProductlist = "https://localhost:7018/api/Products"
const getProductbyid = "https://localhost:7018/api"

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
  // getProductID()
  // {
  //  // console.log(this.http.get(`${getProductbyid}/${productTypeId}`))
  //   return this.http.get(getProductbyid);
  // }
  getProductById(productid: number): Observable<any> {
    // Construct the URL with the productid parameter
    const url = `${getProductbyid}/ProductTypes/${productid}`;

    // Make an HTTP GET request to the URL
    return this.http.get(url);
  }

}
