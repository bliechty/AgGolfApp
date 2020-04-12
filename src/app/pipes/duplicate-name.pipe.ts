import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../interfaces/player';
import { names } from '../app-data/names';

@Pipe({
  name: 'duplicateName'
})
export class DuplicateNamePipe implements PipeTransform {
  transform(value: string, players: Player[], playerIndex: number): string {
    console.log("here");
    let check = false;
    let name = value;
    const playerNames = players.map(player => player.name);
    
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

    return name;
  }
}
