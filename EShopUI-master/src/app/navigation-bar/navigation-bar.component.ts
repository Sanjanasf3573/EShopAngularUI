import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

   isAdmin=(localStorage.getItem("email")=="admin@gmail.com")

   
   user = localStorage.getItem("email")
   constructor()
   {
      console.log(this.isAdmin);
      console.log(this.user);
   }
}
