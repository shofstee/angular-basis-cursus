import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {
  transform(value: number, ...args: number[]): any {
    return Math.min(value, args[0]);
  }
}
