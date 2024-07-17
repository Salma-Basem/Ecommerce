import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interfaces/icategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent {
  constructor(private _ActivatedRoute:ActivatedRoute ,private _CategoryService:CategoryService){}
  categoryId?:string|null
   categoryDetails?:ICategory
    ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe((params)=>{console.log(params) 
        this.categoryId=params.get('id')
      })
  if(this.categoryId!=null)
    {
      this._CategoryService.getSpecificCategory(this.categoryId).subscribe({
        next:(response)=>{console.log(response)
          this.categoryDetails=response.data
        },
        error:(err)=>{console.log(err)}
      })
    }
     
    }
}
