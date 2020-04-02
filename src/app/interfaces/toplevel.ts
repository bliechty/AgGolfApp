import { Course } from './course';
import { Data } from './data';

export interface TopLevel {
    courses?: Course[];
    data?: Data;
}