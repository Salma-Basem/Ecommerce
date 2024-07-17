import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerifyResetCodeComponent } from './components/verify-reset-code/verify-reset-code.component';
import { ResetNewPasswordComponent } from './components/reset-new-password/reset-new-password.component';
import { authGuard } from './guards/auth.guard';
import { noAuthGuard } from './guards/no-auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrandDetailsComponent } from './components/brand-details/brand-details.component';
import { CategorydetailsComponent } from './components/categorydetails/categorydetails.component';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { OrdersComponent } from './components/orders/orders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { CashPaymentComponent } from './components/cash-payment/cash-payment.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'cart',canActivate:[authGuard],component:CartComponent},
  {path:'products',canActivate:[authGuard],component:ProductsComponent},
  {path:'wishlist',canActivate:[authGuard],component:WishlistComponent},
  {path:'categories',canActivate:[authGuard],component:CategoriesComponent},
  {path:'brands',canActivate:[authGuard],component:BrandsComponent},
  {path:'shippingAddress/:id',canActivate:[authGuard],component:ShippingAddressComponent},
  {path:'cashPayment/:id',canActivate:[authGuard],component:CashPaymentComponent},
  {path:'allorders',canActivate:[authGuard],component:OrdersComponent},
  {path:'product/:id',canActivate:[authGuard],component:ProductDetailsComponent},
  {path:'products/category/:id',canActivate:[authGuard],component:CategoryProductsComponent},
  {path:'brand/:id',canActivate:[authGuard],component:BrandDetailsComponent},
  {path:'category/:id',canActivate:[authGuard],component:CategorydetailsComponent},

  {path:'login',canActivate:[noAuthGuard],component:LoginComponent},
  {path:'forget-password',canActivate:[noAuthGuard],component:ForgetPasswordComponent},
  {path:'verify-reset-code',canActivate:[noAuthGuard],component:VerifyResetCodeComponent},
  {path:'reset-new-password',canActivate:[noAuthGuard],component:ResetNewPasswordComponent},
  {path:'register',canActivate:[noAuthGuard],component:RegisterComponent},
  {path:'signOut',canActivate:[noAuthGuard],component:SignOutComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
