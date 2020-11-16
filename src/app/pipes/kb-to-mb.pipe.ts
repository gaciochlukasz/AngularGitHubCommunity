import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kbToMb'
})
export class KbToMbPipe implements PipeTransform {

  transform(value: number): string {
    return `${value / 1000} Mb`;
  }

}
