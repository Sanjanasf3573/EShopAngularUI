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
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductServiceService, private http: HttpClient) { }
  
  displayedColumns: string[] = ['name', 'price', 'productcolor', 'available', 'producttype', 'specialtag', 'actions'];
  dataSource: MatTableDataSource<any>; // Change data type to MatTableDataSource

  jsonInfo: any;
  headerName: string[]; // Change to string[] for headerName

  public flag: boolean = false;
  public headerNameDialog: any;
  public result: any;
  productList: any;

  ngOnInit() {
    // Assuming dataUrl is defined elsewhere in your code
    this.http.get(dataUrl).subscribe((response) => {
      this.jsonInfo = response; // Assign the response to jsonInfo
      this.headerName = Object.keys(this.jsonInfo[0]); // Extract headers from the first item in the response
      this.dataSource = new MatTableDataSource(this.jsonInfo); // Initialize the dataSource
      console.log(this.headerName);
      console.log(typeof (this.headerName));
      console.log("json info", this.jsonInfo);
      console.log(typeof (this.jsonInfo));
      console.log("data source", this.dataSource);
    });
  }

  productsList() {
    // Assuming you want to get products from a service
    this.productService.getProducts().subscribe(
      data => {
        console.log(data);
        this.productList = data; // Assign the data to productList
      }
    );
  }
}
