import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const getProductlist = "https://localhost:7018/api/Products"
const getProductType = "https://localhost:7018/api/ProductTypes"                        
const getProductbyid = "https://localhost:7018/api"
const getSpecialTag = "https://localhost:7018/api/SpecialTags"  

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
  getProductById(id: number): Observable<any> {
    // Construct the URL with the productid parameter
    //const url = `${getProductbyid}/ProductTypes/${id}`;

    // Make an HTTP GET request to the URL
    if (id === undefined) {
      // Handle the case where id is undefined
      console.error('Product ID is undefined. Cannot make the request.');
      // return null; // You might return an observable with an error message or any other desired behavior.
    }
  

   // console.log(`${getProductType}/${id}`);
    return this.http.get(`${getProductType}/${id}`);
  }

  getProductBySpecialId(id: number): Observable<any>{
   // console.log(`${getProductbyid}/SpecialTags/${id}`);
    return this.http.get(`${getProductbyid}/SpecialTags/${id}`);

  }

  getProductTypes()
  {
    console.log(this.http.get(getProductType))
    return this.http.get(getProductType);    
  }

  getSpecialTags()
  {
    console.log(this.http.get(getSpecialTag))
    return this.http.get(getSpecialTag);    
  }

}
