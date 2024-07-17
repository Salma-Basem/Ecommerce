import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-new-password',
  templateUrl: './reset-new-password.component.html',
  styleUrls: ['./reset-new-password.component.css']
})
export class ResetNewPasswordComponent {

  constructor(private _AuthService:AuthService, private _Router:Router){}
  
  apiErrorMessage:string=''
  isLoading:boolean=false

  resetNewPassword:FormGroup= new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    newPassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].{5,}$/)])
  })

  handleResetNewPassword(form:FormGroup)
  {
    this._AuthService.resetNewPassword(form.value).subscribe({
      next:(response)=>{
        console.log(response)
        this._Router.navigate(['/login'])
      },
      error:(err)=>{
        console.log(err)
        this.apiErrorMessage=err.error.message
      }
    })
  }
}
