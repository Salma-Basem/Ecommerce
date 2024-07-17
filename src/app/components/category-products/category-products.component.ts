import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/interfaces/iproducts';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  categoryId:string|null=''
  allProducts:IProducts[]=[]
  isLoading:boolean=false;
constructor(private _ProductsService:ProductsService,private _ActivatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.isLoading=true;
    this._ActivatedRoute.paramMap.subscribe((params)=>{console.log(params) 
      this.categoryId=params.get('id')
    })
if(this.categoryId!=null)
  {
    this._ProductsService.getProductsByCategory(this.categoryId).subscribe({
      next:(response)=>{console.log(response)
        this.allProducts=response.data;
        this.isLoading=false;
      },
      error:(err)=>{console.log(err)
        this.isLoading=false;
      }
    })
  }
  }
}
