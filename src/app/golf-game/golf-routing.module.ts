import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseSelectionComponent } from './course-selection/course-selection.component';

const routes: Routes = [{ path: "course-selection", component: CourseSelectionComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class GolfRoutingModule {}
