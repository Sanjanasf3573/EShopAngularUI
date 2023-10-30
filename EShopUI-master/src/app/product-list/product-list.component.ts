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
  constructor(private productService: ProductServiceService) { }
  
  displayedColumns: string[] = ['name', 'price', 'productColor', 'isAvailable', 'productType', 'SpecialTagName', 'actions'];
  dataSource!: MatTableDataSource<any>;

  jsonInfoFirstTable: any;
  jsonInfoSecondTable: any;
  jsonInfoThirdTable: any;

  ngOnInit() {
    this.productsList();
  }

  productsList() {
    this.productService.getProducts().subscribe(response => {
      this.jsonInfoFirstTable = response;
      this.productService.getProductTypes().subscribe(response => {
        this.jsonInfoSecondTable = response;
        this.productService.getSpecialTags().subscribe(response => {
          this.jsonInfoThirdTable = response;
          this.combineDataSources();
        });
      });
    });
  }

  combineDataSources() {
    // Check if all data sources have been fetched
    if (this.jsonInfoFirstTable && this.jsonInfoSecondTable && this.jsonInfoThirdTable) {
      const mergedData = this.mergeData(this.jsonInfoFirstTable.name,this.jsonInfoFirstTable.price, this.jsonInfoFirstTable.productColor,this.jsonInfoFirstTable.isAvailable,
                                        this.jsonInfoSecondTable.productType, this.jsonInfoThirdTable.SpecialTagName);
      this.dataSource = new MatTableDataSource(mergedData);
    }
  }

  mergeData(data1:any, data2:any, data3:any,data4:any,data5:any,data6:any) {
    // Implement your logic to merge the data from data1, data2, and data3
    // For example, you can concatenate arrays or perform other merging operations
    return [data1,data2,data3,data4,data5,data6];
  }
}
