import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseSelectionComponent } from './course-selection/course-selection.component';
import { AmountOfUsersSelectionComponent } from './amount-of-users-selection/amount-of-users-selection.component';
import { GolfScorecardComponent } from './golf-scorecard/golf-scorecard.component';
import { TeeSelectionComponent } from './tee-selection/tee-selection.component';

import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { environment } from 'src/environments/environment';

import { ScorecardDirective } from '../directives/scorecard.directive';

@NgModule({
  declarations: [
    CourseSelectionComponent,
    AmountOfUsersSelectionComponent,
    GolfScorecardComponent,
    TeeSelectionComponent,
    ScorecardDirective
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatProgressSpinnerModule
  ]
})
export class GolfModule { }
