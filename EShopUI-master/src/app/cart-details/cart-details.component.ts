import { Component } from '@angular/core';
export interface Product {
  image: string;
  name: string;
  price: number;
  productType: string;
  color: string;
}
@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent {

  counter = 1;
  displayedColumns: string[] = ['image', 'name', 'price', 'productType', 'color','items'];
  products: Product[] = [
    { image: 'assets/pinktop.jpg', name: 'Women Top', price: 1000, productType: 'Clothing', color: 'Pink' },
  ];
 
}
