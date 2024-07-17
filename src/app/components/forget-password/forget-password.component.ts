import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){}
  apiErrorMessage:string=''
  isLoading=false
forgotPasswordForm:FormGroup= new FormGroup({
  email: new FormControl(null,[Validators.required,Validators.email])
})

handleForgetPassword(forgetPasswordForm:FormGroup)
{
  this._AuthService.forgotPassword(this.forgotPasswordForm.value).subscribe({
    next:(response)=>{console.log(response)
 this._Router.navigate(['/verify-reset-code'])
    },
    error:(err)=>{console.log(err)
      this.apiErrorMessage= err.error.message
    }
  })
}
}
