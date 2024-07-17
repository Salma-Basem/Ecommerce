import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/interfaces/iproducts';
import { ProductsService } from 'src/app/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }






  constructor(private toastr:ToastrService,private _ActivatedRoute:ActivatedRoute ,private _ProductsService:ProductsService,private _CartService:CartService){}
productId?:string|null
 productDetails?:IProducts
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{console.log(params) 
      this.productId=params.get('id')
    })
if(this.productId!=null)
  {
    this._ProductsService.getSpecificProduct(this.productId).subscribe({
      next:(response)=>{console.log(response)
        this.productDetails=response.data
      },
      error:(err)=>{console.log(err)}
    })
  }
   
  }

  getProductsIntoCart(id:any)
  {
    this._CartService.addProductsToCart(id).subscribe(
      { 
        next:(response)=>{console.log(response);
          this._CartService.cartItemsNum.next(response.numOfCartItems)
          this.toastr.success("It was added successfully to cart","Product Added");
        },
        error:(err)=>{console.log(err)}
      }
    )
  }
}
