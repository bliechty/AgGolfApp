import { Component, OnInit, OnDestroy } from '@angular/core';
import { GolfService } from '../golf.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.css']
})
export class CourseSelectionComponent implements OnInit, OnDestroy {
  courses: Course[];

  savedGame: boolean = false;

  getCoursesObservableSubscription: Subscription;
  getSavedGameObservableSubscription: Subscription;
  getCourseObservableByIdSubscription: Subscription;

  constructor(
      private golfService: GolfService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  ngOnDestroy(): void {
    this.getCoursesObservableSubscription.unsubscribe();
    this.getSavedGameObservableSubscription.unsubscribe();

    if (this.getCourseObservableByIdSubscription) {
      this.getCourseObservableByIdSubscription.unsubscribe();
    }
  }

  getCourses(): void {
    this.getCoursesObservableSubscription = this.golfService.getCoursesObservable().subscribe(courses => {
      this.courses = courses;
    });

    this.getSavedGameObservableSubscription = this.golfService.getSavedGameObservable().subscribe(savedGame => {
      if (savedGame) {
        this.savedGame = true;
      }
    });
  }
    
  selectCourse(id: number): void {
    this.getCourseObservableByIdSubscription = this.golfService.getCourseObservableById(id).subscribe(course => {
      this.golfService.writeToUserInputByName('selectedCourse', course).then(_ => {
        this.golfService.writeSavedGame(false).then(_ => {
          this.router.navigateByUrl('/amount-of-users');
        })
      });
    });
  }

  goToCurrentCourse(): void {
    this.router.navigateByUrl('current-game');
  }
}
