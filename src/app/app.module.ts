import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerifyResetCodeComponent } from './components/verify-reset-code/verify-reset-code.component';
import { ResetNewPasswordComponent } from './components/reset-new-password/reset-new-password.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeMainSliderComponent } from './components/home-main-slider/home-main-slider.component';
import { HomeCategorySliderComponent } from './components/home-category-slider/home-category-slider.component';
import { AllBrandsComponent } from './components/all-brands/all-brands.component';
import { BrandDetailsComponent } from './components/brand-details/brand-details.component';
import { AllcategoriesComponent } from './components/allcategories/allcategories.component';
import { CategorydetailsComponent } from './components/categorydetails/categorydetails.component';
import { AuthInterceptor } from './Interceptors/auth.interceptor';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddEGPPipe } from './pipes/add-egp.pipe';
import { AddTitlePipe } from './pipes/add-title.pipe';

import { ToastrModule } from 'ngx-toastr';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { SearchPipe } from './pipes/search.pipe';
import { CashPaymentComponent } from './components/cash-payment/cash-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    RegisterComponent,
    LoginComponent,
    SignOutComponent,
    NotFoundComponent,
    ForgetPasswordComponent,
    VerifyResetCodeComponent,
    ResetNewPasswordComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    HomeMainSliderComponent,
    HomeCategorySliderComponent,
    AllBrandsComponent,
    BrandDetailsComponent,
    AllcategoriesComponent,
    CategorydetailsComponent,
    ShippingAddressComponent,
    OrdersComponent,
    AddEGPPipe,
    AddTitlePipe,
    WishlistComponent,
    LoadingComponent,
    FooterComponent,
    CategoryProductsComponent,
    SearchPipe,
    CashPaymentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
   ReactiveFormsModule,
   HttpClientModule,
   BrowserAnimationsModule,
   CarouselModule,
   BrowserAnimationsModule, 
   NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
   ToastrModule.forRoot({ // Configuration options
    timeOut: 3000, // Toast duration in milliseconds
    positionClass: 'toast-top-right', // Position (adjust for visibility)
    preventDuplicates: true // Prevent duplicate toasts
  })


  ],
  providers: [
    
    {provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
