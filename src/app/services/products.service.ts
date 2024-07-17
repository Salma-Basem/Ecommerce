import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProducts():Observable<any>
  {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  getSpecificProduct(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  getAllCategories():Observable<any>
  {
     return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  getProductsByCategory(categoryId:string):Observable<any>
  {
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`)
  } 

  getProductsByBrand(brandId:string):Observable<any>
  {
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`)
  } 
}
