import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductServiceService } from '../services/product-service.service';
import { forkJoin } from 'rxjs';

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
    const products$ = this.productService.getProducts();
    const productTypes$ = this.productService.getProductTypes();
    const specialTags$ = this.productService.getSpecialTags();

    forkJoin([products$, productTypes$, specialTags$]).subscribe((responses) => {
      this.jsonInfoFirstTable = responses[0];
      this.jsonInfoSecondTable = responses[1];
      this.jsonInfoThirdTable = responses[2];

      this.combineDataSources();
    });
  }

  combineDataSources() {
    const mergedData = this.mergeData();
    this.dataSource = new MatTableDataSource(mergedData);
  }

  mergeData() {
    // Implement your logic to merge the data from data1, data2, and data3
    // Construct an array of objects where each object represents a row of data
    // with columns that correspond to the columns in your MatTable.

    const mergedData = [];

    for (let i = 0; i < this.jsonInfoFirstTable.length; i++) {
      mergedData.push({
        name: this.jsonInfoFirstTable[i].name,
        price: this.jsonInfoFirstTable[i].price,
        productColor: this.jsonInfoFirstTable[i].productColor,
        isAvailable: this.jsonInfoFirstTable[i].isAvailable,
        productType: this.jsonInfoSecondTable[i].productType,
        SpecialTagName: this.jsonInfoThirdTable[i].SpecialTagName,
      });
    }

    return mergedData;
  }
}
