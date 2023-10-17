import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
    name="Women top";
    price="1000";
    productcolor="Pink";
    producttype="Clothing";
    image="assets/pinktop.jpg";
    specialtag="MRP";
    availability="Yes";
}
