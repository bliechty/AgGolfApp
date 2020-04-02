import { TeeType } from './teetype';
import { TeeColorType } from './teecolortype';
import { TeeHexColor } from './teehexcolor';

export interface ChangeLocation {
    courseHoleTeeBoxId: number;
    courseHoleId: number;
    teeTypeId: number;
    teeType: TeeType;
    teeColorTypeId: number | null;
    teeColorType: TeeColorType | null;
    lat: number;
    lng: number;
    par: number;
    yards: number;
    meters: number;
    hcp: number;
    hcp2: null;
    teeHexColor: TeeHexColor | null;
}