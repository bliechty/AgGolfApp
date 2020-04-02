import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseSelectionComponent } from './course-selection/course-selection.component';
import { AmountOfUsersSelectionComponent } from './amount-of-users-selection/amount-of-users-selection.component';
import { GolfScorecardComponent } from './golf-scorecard/golf-scorecard.component';
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared/shared.module';
import { TeeSelectionComponent } from './tee-selection/tee-selection.component';

@NgModule({
  declarations: [
    CourseSelectionComponent,
    AmountOfUsersSelectionComponent,
    GolfScorecardComponent,
    TeeSelectionComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    SharedModule
  ]
})
export class GolfModule { }
