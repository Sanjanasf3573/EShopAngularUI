import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductTypesComponent } from './add-product-types/add-product-types.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddSpecialTagNameComponent } from './add-special-tag-name/add-special-tag-name.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { EditProductTypesComponent } from './edit-product-types/edit-product-types.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditSpecialTagNameComponent } from './edit-special-tag-name/edit-special-tag-name.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductTypeListComponent } from './product-type-list/product-type-list.component';
import { RegisterComponent } from './register/register.component';
import { SpecialTagListComponent } from './special-tag-list/special-tag-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path : '' , redirectTo:'login' , pathMatch:'full' },
  { path : 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'forgotpassword', component: ForgetPasswordComponent},
  { path:'productdetails', component: ProductDetailsComponent,},
  { path : 'producttypelist' , component:ProductTypeListComponent},
  { path : 'specialtaglist' , component:SpecialTagListComponent},
  { path : 'productlist' , component:ProductListComponent},
  { path : 'userlist' , component:UserListComponent},
  { path : 'cart' , component:CartDetailsComponent},
  { path : 'checkout' , component:OrderDetailsComponent},
  { path : 'addproducttype',component:AddProductTypesComponent},
  { path : 'addproduct',component:AddProductComponent},
  { path : 'addspecialtagname',component:AddSpecialTagNameComponent},
  { path:'editproducttypes',component:EditProductTypesComponent},
  { path: 'editspecialtagname',component:EditSpecialTagNameComponent},
  { path: 'editproduct',component:EditProductComponent},
  { path: 'logout',component:LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
