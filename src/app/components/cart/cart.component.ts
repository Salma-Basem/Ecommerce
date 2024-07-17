import { Component, OnInit } from '@angular/core';
import { Icart } from 'src/app/interfaces/icart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myCart:any
  cartDetails:string|null=""
  constructor(private _CartService:CartService){}

  ngOnInit(): void {
    this._CartService.GetUserCart().subscribe({
      next:(res)=>{
        console.log(res);
        this.myCart=res.data
        this.cartDetails=res.data?._id
       
        console.log(this.myCart)
      },
      error:(err)=>{console.log(err)}
    })
  }

  removeItemFromCart(id:string)
  {
    this._CartService.removeCartItem(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.myCart=res.data
        this._CartService.cartItemsNum.next(res.numOfCartItems)
        
      },
      error:(err)=>{console.log(err)}
    })
  }

  updateCartItems(id:string,count:number)
  {
    this._CartService.updateCartItems(id,count).subscribe({
      next:(res)=>{
        console.log(res);
        this.myCart=res.data
        //console.log(this.myCart)
      },
      error:(err)=>{console.log(err)}
    })
  }

  clearYourCart()
  {
    this._CartService.clearCart().subscribe({
      next:(res)=>{
        console.log(res);
        this.myCart=res.data
        this._CartService.cartItemsNum.next(0)
      },
      error:(err)=>{console.log(err)}
  })
}
  

}
