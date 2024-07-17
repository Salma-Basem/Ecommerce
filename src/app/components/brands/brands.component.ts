import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  allBrands:any[]=[]
constructor(private _BrandsService:BrandsService){}

  ngOnInit(): void {
 
    this._BrandsService.getAllBrands().subscribe({
      next:(res)=>{console.log(res);
        this.allBrands=res.data
      },
      error:(err)=>{console.log(err)}
    })
  }


}
