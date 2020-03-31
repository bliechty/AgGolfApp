import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseSelectionComponent } from './course-selection/course-selection.component';
import { AmountOfUsersSelectionComponent } from './amount-of-users-selection/amount-of-users-selection.component';
import { GolfScorecardComponent } from './golf-scorecard/golf-scorecard.component';

@NgModule({
  declarations: [
    CourseSelectionComponent,
    AmountOfUsersSelectionComponent,
    GolfScorecardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GolfModule { }
