import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from 'src/app/interfaces/iproducts';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  isAddedToWishlist = false;
  @Input() product!:IProducts
  wishListProductsIdsList: string []=[]
  constructor(private _CartService:CartService,private toastr:ToastrService,private _WishlistService:WishlistService){}
  ngOnInit(): void {
    this._WishlistService.wishlistProductsIds.subscribe( (idsList)=>{this.wishListProductsIdsList=idsList})
  }
  isRed = false;

  toggleColor() {
    this.isRed = !this.isRed;
  }
  
  getProductsIntoCart(id:string)
  {
    this._CartService.addProductsToCart(id).subscribe(
      { 
        next:(response)=>{console.log(response);
          this._CartService.cartItemsNum.next(response.numOfCartItems)
          this.toastr.success("It was added successfully to cart","Product Added");
        },
        error:(err)=>{console.log(err)}
      }
    )
  }

  getProductsIntoWishList(id:string)
  {
    this._WishlistService.AddProductToWishlist(id).subscribe(
      { 
        next:(response)=>{console.log(response);
        this.toastr.success(response.message,"Product Added");
        this._WishlistService.wishlistProductsIds.next(response.data);
        this._WishlistService.wishlistCount.next(response.data.length)
       //   this._WishlistService.cartItemsNum.next(response.n)
        },
        error:(err)=>{console.log(err)}
      }
    )
  }
  showSuccessWishlist() {
    
   
    this.toastr.success("It was added successfully to wishlist");
  
  }
 
  // showSuccessCart() {
    
   
  //   this.toastr.success("It was added successfully to cart");
   
  // }

  isWishlistProduct(id:string)
  {
    return this.wishListProductsIdsList.includes(id)
  }
}
