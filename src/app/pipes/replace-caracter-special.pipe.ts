import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCaracterSpecial'
})
export class ReplaceCaracterSpecialPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/[,:-]/g, '');
  }

}
