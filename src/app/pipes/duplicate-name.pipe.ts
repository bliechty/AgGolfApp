import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicateName'
})
export class DuplicateNamePipe implements PipeTransform {

  transform(value: string, args: string[]): unknown {
    return args.some(name => name === value);
  }

}
