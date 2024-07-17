import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBrand } from 'src/app/interfaces/ibrand';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute ,private _BrandsService:BrandsService){}
  brandId?:string|null
   brandDetails?:IBrand
    ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe((params)=>{console.log(params) 
        this.brandId=params.get('id')
      })
  if(this.brandId!=null)
    {
      this._BrandsService.getSpecificBrand(this.brandId).subscribe({
        next:(response)=>{console.log(response)
          this.brandDetails=response.data
        },
        error:(err)=>{console.log(err)}
      })
    }
     
    }
}
