import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseSelectionComponent } from './course-selection/course-selection.component';
import { AmountOfUsersSelectionComponent } from './amount-of-users-selection/amount-of-users-selection.component';
import { GolfScorecardComponent } from './golf-scorecard/golf-scorecard.component';

const routes: Routes = [
    { path: 'course-selection', component: CourseSelectionComponent },
    { path: 'amount-of-users', component: AmountOfUsersSelectionComponent },
    { path: 'current-game', component: GolfScorecardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class GolfRoutingModule {}
