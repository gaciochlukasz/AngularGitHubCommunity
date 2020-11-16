import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noData'
})
export class NoDataPipe implements PipeTransform {

  transform(value: any): any {
    if (!value && value !== 0) {
      return 'No data.';
    }
    return value;
  }

}
