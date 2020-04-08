import { Component, OnInit } from '@angular/core';
import { GolfService } from '../golf.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.css']
})
export class CourseSelectionComponent implements OnInit {
  courses: Course[];

  savedGame: boolean = false;

  constructor(
      private golfService: GolfService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.golfService.getCoursesObservable().subscribe(courses => {
      this.courses = courses;
    });

    this.golfService.getSavedGameObservable().subscribe(savedGame => {
      if (savedGame) {
        this.savedGame = true;
      }
    });
  }
    
  selectCourse(id: number): void {
    this.golfService.getCourseObservableById(id).subscribe(course => {
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
