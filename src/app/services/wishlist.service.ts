import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProducts } from '../interfaces/iproducts';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlistProductsIds= new BehaviorSubject<string[]>([])
  wishlistCount= new BehaviorSubject<number>(0)
  constructor(private _HttpClient:HttpClient) {
   this.updateLoggedUserWishlistAndCount()
  
  
}

updateLoggedUserWishlistAndCount()
{
  this.GetUserWishlist().subscribe({
    next:(res)=>{

      this.wishlistProductsIds.next((res.data as IProducts[]).map((product)=>product._id))
      this.wishlistCount.next(res.data.length)
    },
    error:(err)=>{console.log(err)
    }
  })
}
AddProductToWishlist(id:string):Observable<any>
{
  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/wishlist",
    {
    "productId": id
},

)
}
GetUserWishlist():Observable<any>
{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist',)
}

removeProductFromWishlist(id:string):Observable<any>
{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
}


}
