import { Component } from '@angular/core';

@Component({
  selector: 'app-special-tag-list',
  templateUrl: './special-tag-list.component.html',
  styleUrls: ['./special-tag-list.component.css']
})
export class SpecialTagListComponent {
  displayedColumns: string[] = ['name', 'actions'];
  dataSource = [
    { name: 'Deal of the day' },
    { name: 'Discount' },
    { name: 'MRP' }
    
  ];

}
