import { Component, Input } from '@angular/core';
import { ICategory } from 'src/app/interfaces/icategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-allcategories',
  templateUrl: './allcategories.component.html',
  styleUrls: ['./allcategories.component.css']
})
export class AllcategoriesComponent {
  @Input() category!:ICategory
  
  constructor(private _CategoryService:CategoryService){}

  getSpecificBrand(id:string)
  {
    this._CategoryService.getSpecificCategory(id).subscribe(
      { 
        next:(response)=>{console.log(response)},
        error:(err)=>{console.log(err)}
      }
    )
  }
}
