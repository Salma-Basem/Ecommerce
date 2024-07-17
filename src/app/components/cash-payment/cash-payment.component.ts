import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cash-payment',
  templateUrl: './cash-payment.component.html',
  styleUrls: ['./cash-payment.component.css']
})
export class CashPaymentComponent {

  cartID:string |null=''

  constructor(private _ActivatedRoute:ActivatedRoute,private _CartService:CartService,private toastr:ToastrService){}
  ngOnInit(): void {
   this._ActivatedRoute.paramMap.subscribe((params)=>{this.cartID=params.get("id")})
  }
  shippingAddressForm:FormGroup= new FormGroup({
       details:new FormControl(null,[Validators.required]) ,
        phone: new FormControl(null,[Validators.required,Validators.pattern(/^0[1205][0-9]{8}$/)]) ,
        city:new FormControl(null,[Validators.required]) 
  })


  redirectToPayment(url:string)
  {
    window.location.href=url
  }
  handleShippingAddress(shippingAddressForm:FormGroup)
  {
      this._CartService.onlinePayment(this.cartID,shippingAddressForm.value).subscribe(  {
        next:(res)=>{
          console.log("res:"+res);
          this.toastr.info("Payment By Visa");
          this.redirectToPayment(res.session.url)
        },
        error:(err)=>{console.log(err)}
        
      })
    
  }

handleCash(shippingAddressForm:FormGroup)
{
    this._CartService.CreateCashOrder(this.cartID,shippingAddressForm.value).subscribe(  {
      next:(res)=>{
        console.log("res:"+res);
        this.toastr.info("Cash Payment ");
       
      },
      error:(err)=>{console.log(err)}
      
    })
  
}
}

