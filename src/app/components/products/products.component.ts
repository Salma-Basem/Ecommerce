import { Component } from '@angular/core';
import { IProducts } from 'src/app/interfaces/iproducts';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  allProducts:IProducts[]=[]
constructor(private _ProductsService:ProductsService){}
 

  ngOnInit()
{
  this._ProductsService.getAllProducts().subscribe({
    next:(response)=>{console.log(response)
      this.allProducts=response.data
    },
    error:(err)=>{console.log(err)}
  })
}
}
