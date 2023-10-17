import { Component } from '@angular/core';
//import { ProductServiceService } from '../services/product-service.service';

export interface ProductCard {
  description:string;
  imageUrl: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  productCards: ProductCard[] = [
    {
      description: 'Woman Top',
      imageUrl: 'assets/pinktop.jpg',
      price: 1000,
    },
    {
      description: 'Heels',
      imageUrl: 'assets/redheels.jpg',
      price: 2000,
    },
    {
      description: 'Laptop',
      imageUrl: 'assets/laptop.jpg',
      price: 40000,
    },
   
  ]; 
  
  // productLists:any;

  // constructor(private productservice: ProductServiceService) {
  // }

  // ngOnInit()
  // {
  //      this.productList();
  // }

  // productList()
  // {
  //    this.productservice.getProducts().subscribe((response:any)=>
  //    {
  //      this.productLists = response;
  //    })
  // }

}
