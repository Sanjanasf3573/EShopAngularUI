import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-special-tag-list',
  templateUrl: './special-tag-list.component.html',
  styleUrls: ['./special-tag-list.component.css']
})
export class SpecialTagListComponent {
  // displayedColumns: string[] = ['name', 'actions'];
  // //  this.specialTagId();
  // dataSource = [
  //   { name: 'Deal of the day' },
  //   { name: 'Discount' },
  //   { name: 'MRP' }
    
  // ];

  // specialTagId()
  // {
  //   this.productService.getProductBySpecialId(this.specialid).subscribe(data => {
  //     this.specialtaglist = data;
  //     console.log('Special Data:', this.specialtaglist);
  //   });
  // }
  constructor(private productservice:ProductServiceService){}
  ngOnInit()
  {
    this.specialTagList();
  }
  displayedColumns: string[] = ['specialTagName', 'actions'];
  dataSource : any;
  jsonInfo:any;
  headerName:any;

  specialTagList()
  {
    this.productservice.getSpecialTags().subscribe(response=>{
      this.jsonInfo = response;
      this.headerName = Object.keys(this.jsonInfo[0]);
      this.dataSource = new MatTableDataSource(this.jsonInfo);
      console.log(this.headerName);
      console.log(typeof (this.headerName));
      console.log("special tag list json info", this.jsonInfo);
      console.log(typeof (this.jsonInfo));
      console.log("special tag list data source", this.dataSource);
    });

  }

  deleteSpecialTag()
  {
    
  }

}
