// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import { ProductServiceService } from '../services/product-service.service';


// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent {
//   constructor(private productservice:ProductServiceService, private http:HttpClient){}
//   displayedColumns: string[] = ['name', 'price','productcolor','available','producttype','specialtag','actions'];
//   dataSource :any
//   jsoninfo : any
//   public headername : any
//   public headernames : any
//   public flag : boolean = false
//   public headername_dialog : any
//   public result : any

//   productList:any; 


//   ngOnInit() { 

//     this.http.get(dataUrl).subscribe((response) => 
//     {
                  
//     })
//   }


//   productsList()

//   {

//     this.productList = this.productservice.getProducts().subscribe(

//        data=>{

//            console.log(data);

//        }
         

//     );
    
//     this.jsoninfo = data;
//          this.headername = Object.keys(this.jsoninfo[0]);
//          this.dataSource =  new MatTableDataSource (data);
//          console.log(this.headername);
//          console.log(typeof(this.headername));
//          console.log("json info",this.jsoninfo); 
//          console.log(typeof(this.jsoninfo)); 
//          console.log("data source",this.dataSource); 

//     //console.log(this.productList);

//   }

  
  
// }
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { response } from 'express';

import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductServiceService, private http: HttpClient) { }
  
  displayedColumns: string[] = ['name', 'price', 'productColor', 'isAvailable', 'ProductType', 'Name', 'actions'];
  dataSource:any; // Change data type to MatTableDataSource

  jsonInfo: any;
  headerName: any; // Change to string[] for headerName

  public flag: boolean = false;
  public headerNameDialog: any;
  public result: any;
  productList: any;
  product: any;
  ngOnInit() {
    this.productsList();
    this.productsListId();
  }

  productsListId()
  {
    const productid = 1; // Replace with the actual productid

    this.productService.getProductById(productid).subscribe(data => {
      this.product = data;
      console.log('Product Data:', this.product);
    });
  
    // this.productService.getProductID().subscribe(response =>{
    //   this.jsonInfo = response;
    //   this.headerName = Object.keys(this.jsonInfo[0]);
    //   this.dataSource = new MatTableDataSource(this.jsonInfo);
    //   console.log(this.headerName);
    //   console.log(typeof (this.headerName));
    //   console.log("json info", this.jsonInfo);
    //   console.log(typeof (this.jsonInfo));
    //   console.log("data source", this.dataSource);
    // })

  }

  productsList() 
  {
    
    this.productService.getProducts().subscribe(response => {
      this.jsonInfo = response;
      this.headerName = Object.keys(this.jsonInfo[0]);
      this.dataSource = new MatTableDataSource(this.jsonInfo);
      console.log(this.headerName);
      console.log(typeof (this.headerName));
      console.log("json info", this.jsonInfo);
      console.log(typeof (this.jsonInfo));
      console.log("data source", this.dataSource);
    });
  }
}