import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedUser:boolean=false
  cartItemsNum:number=0
  wishlistCount:number=0
  constructor(private _AuthService:AuthService,private _CartService:CartService,private _WishlistService:WishlistService){}
 

  logout()                 
  {
this._AuthService.logOut()
  }
  ngOnInit() {
    this._AuthService.isLoggedInSubject.subscribe((isLogged)=>{this.isLoggedUser=isLogged})
    this._CartService.cartItemsNum.subscribe({
      next:(num)=>{this.cartItemsNum=num}
    })
this._WishlistService.wishlistCount.subscribe((count)=>{this.wishlistCount=count;})
  }
}
 