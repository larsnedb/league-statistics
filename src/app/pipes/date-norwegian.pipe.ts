import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'dateNorwegian'
})
export class DateNorwegianPipe extends DatePipe implements PipeTransform {

  transform(value: string): string {
    return super.transform(value, 'dd/MM/yy');
  }
}
