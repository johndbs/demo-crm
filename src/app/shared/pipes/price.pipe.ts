import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(item: any, vatInc: boolean): number {
    if(vatInc){
      return item.priceVatInc(item.dailyRateExVAT, item.numberOfDays, item.vat);
    }
    return item.priceVatInc(item.dailyRateExVAT, item.numberOfDays);
  }

}
