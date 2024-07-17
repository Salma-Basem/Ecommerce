import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  allCategories:any[]=[]
constructor(private _CategoryService:CategoryService){}

  ngOnInit(): void {
 
    this._CategoryService.getAllCategories().subscribe({
      next:(res)=>{console.log(res);
        this.allCategories=res.data
      },
      error:(err)=>{console.log(err)}
    })
}
}