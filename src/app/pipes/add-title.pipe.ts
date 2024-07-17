import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addTitle'
})
export class AddTitlePipe implements PipeTransform {

  transform(title:string,numOfWords:number): string {
    return title.split(" ").slice(0,numOfWords).join(" ");
  }

}
