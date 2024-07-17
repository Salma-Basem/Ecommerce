import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private _WishlistService:WishlistService,private _AuthService:AuthService,private _Router:Router,private _CartService:CartService){}

  apiErrorMessage:string=''
  isLoading:boolean=false

loginForm:FormGroup=  new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].{5,}$/)])
})

handleLogin(loginForm:FormGroup)
{
  if(this.loginForm.valid)
    {
      this.isLoading=true
      this._AuthService.login(loginForm.value).subscribe({
        next:(response)=>{console.log(response)
          localStorage.setItem('token',response.token)
          this._CartService.updateCartItemsCount()
          this._WishlistService.updateLoggedUserWishlistAndCount()
          this._Router.navigate(['/home'])
          this._AuthService.isLoggedInSubject.next(true)
          this.isLoading=false
        },
        error:(err)=>{console.log(err)
          this.isLoading=false
          this.apiErrorMessage=err.error.message
        }
      })
    }
}
}
