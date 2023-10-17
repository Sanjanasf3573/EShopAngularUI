import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductTypesComponent } from './add-product-types/add-product-types.component';
import { EditProductTypesComponent } from './edit-product-types/edit-product-types.component';
import { SpecialTagListComponent } from './special-tag-list/special-tag-list.component';
import { AddSpecialTagNameComponent } from './add-special-tag-name/add-special-tag-name.component';
import { EditSpecialTagNameComponent } from './edit-special-tag-name/edit-special-tag-name.component';
import { UserListComponent } from './user-list/user-list.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductTypeListComponent } from './product-type-list/product-type-list.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    ProductDetailsComponent,
    AddProductTypesComponent,
    EditProductTypesComponent,
    SpecialTagListComponent,
    AddSpecialTagNameComponent,
    EditSpecialTagNameComponent,
    UserListComponent,
    CartDetailsComponent,
    OrderDetailsComponent,
    LogoutComponent,
    ForgetPasswordComponent,
    ProductTypeListComponent,
    NavigationBarComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
