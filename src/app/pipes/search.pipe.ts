import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../interfaces/iproducts';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productsList:IProducts[],searchTerm:string): IProducts[] {
    return productsList.filter((product)=>product.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

}
