import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Icart } from 'src/app/interfaces/icart';
import{IProducts} from 'src/app/interfaces/iproducts';
import { CartService } from 'src/app/services/cart.service';
import { Wishlist } from 'src/app/interfaces/wishlist';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  myWishList:IProducts[]=[]
 isLoading:boolean=false;
 
  WishListDetails:string|null="";

  constructor(private _WishlistService:WishlistService,private _CartService:CartService,private toastr:ToastrService){}

  ngOnInit(): void {
    this.isLoading=true
   this.getWishList();
  }


getWishList():void{
  this._WishlistService.GetUserWishlist().subscribe({
    next:(res)=>{
      
      this.myWishList=res.data
      this.WishListDetails=res.data._id
     
      console.log("w"+this.myWishList);
      this.isLoading=false;
    },
    error:(err)=>{console.log(err)

      this.isLoading=false;
    }
  })
}
  removeItemFromWishlist(productId: string)
  {
    this._WishlistService.removeProductFromWishlist(productId).subscribe({
      next:(res)=>{console.log(res);
        this._WishlistService.wishlistProductsIds.next(res.data);
        this._WishlistService.wishlistCount.next(res.data.length)
        this.toastr.info("Product deleted successfully !!")
        this.getWishList();
      },
      error:(error) => { console.error('Error removing item from wishlist:', error);}
    })
  }
  getProductsIntoCart(id:string)
  {
    this._CartService.addProductsToCart(id).subscribe(
      { 
        next:(response)=>{console.log(response);
          this._CartService.cartItemsNum.next(response.numOfCartItems);
          this.toastr.success("It was added successfully");
        },
        error:(err)=>{console.log(err)}
      }
    )
  }


}
