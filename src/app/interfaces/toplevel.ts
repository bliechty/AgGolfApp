import { Course } from './course';
import { Data } from './data';
import { Player } from './player';

export interface TopLevel {
    courses?: Course[];
    data?: Data;
    players?: Player[];
    savedGame?: boolean;
}