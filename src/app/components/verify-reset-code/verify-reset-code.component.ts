import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verify-reset-code',
  templateUrl: './verify-reset-code.component.html',
  styleUrls: ['./verify-reset-code.component.css']
})
export class VerifyResetCodeComponent {

  constructor(private _AuthService:AuthService,private _Router:Router){}
  apiErrorMessage:string=''
  isLoading:boolean=false
  verifyResetCodeForm:FormGroup= new FormGroup({
    resetCode:new FormControl(null,[Validators.required])
  })

  handleResetCode(resetForm:FormGroup)
  {
    this._AuthService.resetCode(resetForm.value).subscribe({
      next:(response)=>{console.log(response)
        this._Router.navigate(['/reset-new-password'])
      },
      error:(err)=>{console.log(err)
        this.apiErrorMessage=err.error.message
      }
    })
  }
}
