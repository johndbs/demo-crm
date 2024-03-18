import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, coef: number, vat?: number): number {
    if(vat){
      return value * coef * (1 + vat / 100);
    }
    return value * coef;
  }

}
