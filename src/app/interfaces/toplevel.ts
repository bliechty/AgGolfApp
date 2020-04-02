import { Course } from './course';
import { Data } from '@angular/router';

export interface TopLevel {
    courses?: Course[];
    data?: Data;
}