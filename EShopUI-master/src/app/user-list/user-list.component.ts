import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'email','status'];
  dataSource = [
    { name: 'Kiruthika', email:'kiruthika.kd.99@gmail.com',status:'Active'},
    { name: 'Sanjana', email:'sanjana@gmail.com',status:'Active'},
    { name: 'Rituja', email:'rituja@gmail.com',status:'Active'},
  ];

}
