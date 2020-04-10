import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicateName'
})
export class DuplicateNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
