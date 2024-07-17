import { afterNextRender, Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ICategory } from 'src/app/interfaces/icategory';

@Component({
  selector: 'app-home-category-slider',
  templateUrl: './home-category-slider.component.html',
  styleUrls: ['./home-category-slider.component.css']
})
export class HomeCategorySliderComponent implements OnInit{

  allCategories:ICategory[]=[]

  constructor(private _ProductsService:ProductsService) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    dots: true,
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
        items: 7
      }
    },
    nav: false
  }
  ngOnInit():void {
    this._ProductsService.getAllCategories().subscribe({

      next:(response)=>{console.log(response);
        this.allCategories=response.data;
      },
      error:(err)=>{console.log(err);}
      
    })
  }

  
}
