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
  
  displayedColumns: string[] = ['name', 'price', 'productColor', 'isAvailable', 'productType', 'Name', 'actions'];
  dataSource:any; // Change data type to MatTableDataSource

  jsonInfo: any;
  headerName: any; // Change to string[] for headerName

  dataSourceFirstTable :any;
  dataSourceSecondTable : any;
  dataSourceThirdTable :any;
  mergedTable:any;
  mergedDataSource :any;

  public headerNameDialog: any;
  public result: any;
  productList: any;
  product: any;
  specialtaglist :any;
  ngOnInit() {
    this.productsList();
    this.productsListId(this.productid);
    //this.productTypeList();
  
  }
  productid = 1; // Replace with the actual productid
  specialid = 1;
 
  productsListId(productTypeId: any)
  {

    this.productService.getProductById(productTypeId).subscribe(data => {
      this.product = data;
      console.log('Product Data:', this.product);
      return "abc";
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
      this.dataSourceFirstTable = new MatTableDataSource(this.jsonInfo);
      console.log(this.headerName);
      console.log(typeof (this.headerName));
      console.log("json info", this.jsonInfo);
      console.log(typeof (this.jsonInfo));
      console.log("data source", this.dataSource);
    });

    this.productService.getProductTypes().subscribe(response=>{
      this.jsonInfo = response;
      this.headerName = Object.keys(this.jsonInfo[0]);
      this.dataSourceSecondTable = new MatTableDataSource(this.jsonInfo);
      console.log(this.headerName);
      console.log(typeof (this.headerName));
      console.log("product type list json info", this.jsonInfo);
      console.log(typeof (this.jsonInfo));
      console.log("product type list data source", this.dataSource);
    });
    this.mergedTable = [this.dataSourceFirstTable,this.dataSourceSecondTable];
    
    this.mergedDataSource = new MatTableDataSource(this.mergedTable);


  }
   
  
  
}

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
