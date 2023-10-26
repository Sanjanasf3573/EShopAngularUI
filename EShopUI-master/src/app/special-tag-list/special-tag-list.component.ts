import { Component } from '@angular/core';

@Component({
  selector: 'app-special-tag-list',
  templateUrl: './special-tag-list.component.html',
  styleUrls: ['./special-tag-list.component.css']
})
export class SpecialTagListComponent {
  displayedColumns: string[] = ['name', 'actions'];
  //  this.specialTagId();
  dataSource = [
    { name: 'Deal of the day' },
    { name: 'Discount' },
    { name: 'MRP' }
    
  ];

  // specialTagId()
  // {
  //   this.productService.getProductBySpecialId(this.specialid).subscribe(data => {
  //     this.specialtaglist = data;
  //     console.log('Special Data:', this.specialtaglist);
  //   });
  // }


}
