import { Pipe, PipeTransform } from '@angular/core';
import { names } from '../app-data/names';

@Pipe({
  name: 'duplicateName'
})
export class DuplicateNamePipe implements PipeTransform {
  transform(value: string, playerNames: string[], playerIndex: number): string {
    let check = false;
    let name = value;
    
    while (!check) {
      if (playerNames.some((n, i) => {
        if (i !== playerIndex) {
          return name === n;
        } else {
          return false;
        }
      })) {
        name = names[Math.floor(Math.random() * 99)];
      } else {
        check = true;
      }
    }

    playerNames[playerIndex] = name;

    return name;
  }
}
