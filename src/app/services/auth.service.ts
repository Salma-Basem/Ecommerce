import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedInSubject= new BehaviorSubject<boolean>(localStorage.getItem('token')?true:false)
  constructor(private _HttpClient:HttpClient, private _Router:Router) { }

  register(regForm:Object):Observable<any>
  {
    return  this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",regForm)
  }

  login(loginForm:object):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',loginForm)
  }

  logOut()
  {
    localStorage.removeItem('token');
    this._Router.navigate(['/login'])
    this.isLoggedInSubject.next(false)
  }

  forgotPassword(forgotPassword:object):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',forgotPassword)
  }
  resetCode(form:any):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',form)
  }

  resetNewPassword(resetForm:any):Observable<any>
  {
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',resetForm)
  }
}
