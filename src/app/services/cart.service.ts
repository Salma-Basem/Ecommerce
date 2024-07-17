import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
//cartItemsNum:number=0
  constructor(private _HttpClient:HttpClient) {
     this.updateCartItemsCount()
  }
  cartItemsNum= new BehaviorSubject<number>(0);
  addProductsToCart(id:string):Observable<any>
  {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",
      {
      "productId": id
  },

)
  }

  GetUserCart():Observable<any>
  {
      return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',)
  }
  removeCartItem(id:string):Observable<any>
  {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,)
  }

  updateCartItems(id:string,count:number):Observable<any>
  {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count:count},)
  }

  onlinePayment(carId:any,shippingAddress:any):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${carId}?url=https://ecommerce-48mv.vercel.app`,{shippingAddress:shippingAddress},)
  }
  CreateCashOrder(carId:any,shippingAddress:any):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${carId}`,{shippingAddress:shippingAddress},)
  }

  clearCart():Observable<any>
  {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,)
  }

  updateCartItemsCount()
  {
    this.GetUserCart().subscribe({
      next:(res)=>{console.log(res);
         this.cartItemsNum.next(res.numOfCartItems)
         
      },
      error:(err)=>{
        if(err.status==404)
        {
          this.cartItemsNum.next(0)
        }
      }
    })
  }
}
