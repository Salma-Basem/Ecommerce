import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProducts } from "src/app/interfaces/iproducts";
import { BehaviorSubject } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allProducts:IProducts[]=[]
  isLoading:boolean=false;
  searchTerm:string =""
constructor(private _ProductsService:ProductsService,private spinner: NgxSpinnerService){}
 

  ngOnInit()
{
  this.isLoading=true
  this._ProductsService.getAllProducts().subscribe({
    next:(response)=>{console.log(response)
      this.allProducts=response.data;
      this.isLoading=false
    },
    error:(err)=>{console.log(err)
    this.isLoading=false
    }
  })

 
}



}
