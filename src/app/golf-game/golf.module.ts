import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseSelectionComponent } from "./course-selection/course-selection.component";
import { AmountOfUsersSelectionComponent } from "./amount-of-users-selection/amount-of-users-selection.component";
import { GolfScorecardComponent } from "./golf-scorecard/golf-scorecard.component";
import { TeeSelectionComponent } from "./tee-selection/tee-selection.component";

import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import { MatSelectModule } from "@angular/material/select";
import { SharedModule } from "../shared/shared.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDividerModule } from "@angular/material/divider";

import { environment } from "src/environments/environment";
import { DuplicateNamePipe } from "../pipes/duplicate-name.pipe";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CourseSelectionComponent,
    AmountOfUsersSelectionComponent,
    GolfScorecardComponent,
    TeeSelectionComponent,
    DuplicateNamePipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    FormsModule
  ],
  providers: [DuplicateNamePipe]
})
export class GolfModule {}
