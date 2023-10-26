import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { response } from 'express';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-type-list',
  templateUrl: './product-type-list.component.html',
  styleUrls: ['./product-type-list.component.css']
})
export class ProductTypeListComponent {
  constructor(private productservice:ProductServiceService){}
  displayedColumns: string[] = ['productType', 'actions'];
  dataSource : any;
  jsonInfo:any;
  headerName:any;

  productTypeList()
  {
    this.productservice.getProductTypes().subscribe(response=>{
      this.jsonInfo = response;
      this.headerName = Object.keys(this.jsonInfo[0]);
      this.dataSource = new MatTableDataSource(this.jsonInfo);
      console.log(this.headerName);
      console.log(typeof (this.headerName));
      console.log("product type list json info", this.jsonInfo);
      console.log(typeof (this.jsonInfo));
      console.log("product type list data source", this.dataSource);
    });

  }

}
