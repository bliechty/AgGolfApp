import { Component, OnInit } from '@angular/core';
import { GolfService } from '../golf.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.css']
})
export class CourseSelectionComponent implements OnInit {
  courses: Course[];

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
  }
    
  selectCourse(id: number): void {
    this.golfService.getCourseObservableById(id).subscribe(course => {
      this.golfService.writeToUserInputByName('selectedCourse', course).then(_ => {
        this.router.navigateByUrl('/amount-of-users');
      });
    });
  }
}
