import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseSelectionComponent } from './course-selection/course-selection.component';
import { AmountOfUsersSelectionComponent } from './amount-of-users-selection/amount-of-users-selection.component';
import { GolfScorecardComponent } from './golf-scorecard/golf-scorecard.component';
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    CourseSelectionComponent,
    AmountOfUsersSelectionComponent,
    GolfScorecardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class GolfModule { }
