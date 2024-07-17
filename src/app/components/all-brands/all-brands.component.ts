import { Component, Input } from '@angular/core';
import { IBrand } from 'src/app/interfaces/ibrand';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-all-brands',
  templateUrl: './all-brands.component.html',
  styleUrls: ['./all-brands.component.css']
})
export class AllBrandsComponent {
  @Input() brand!:IBrand
  constructor(private _BrandsService:BrandsService){}

  getSpecificBrand(id:string)
  {
    this._BrandsService.getSpecificBrand(id).subscribe(
      { 
        next:(response)=>{console.log(response)},
        error:(err)=>{console.log(err)}
      }
    )
  }
}
