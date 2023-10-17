import { Component } from '@angular/core';

@Component({
  selector: 'app-product-type-list',
  templateUrl: './product-type-list.component.html',
  styleUrls: ['./product-type-list.component.css']
})
export class ProductTypeListComponent {
  displayedColumns: string[] = ['name', 'actions'];
  dataSource = [
    { name: 'Clothing' },
    { name: 'Electronics' },
    
  ];
}
