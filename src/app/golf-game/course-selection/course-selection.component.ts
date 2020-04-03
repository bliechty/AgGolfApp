import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GolfService } from '../golf.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.css']
})
export class CourseSelectionComponent implements OnInit {
  course$: Observable<Course[]>

  constructor(
      private golfService: GolfService,
      private router: Router,
      @Inject(LOCAL_STORAGE) private storage: StorageService
    ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.course$ = this.golfService.getCoursesObservable();
  }
    
  selectCourse(id: number): void {
    this.golfService.getCourseObservableById(id).subscribe(course => {
      this.storage.set("selectedCourse", course);
      this.router.navigateByUrl('/amount-of-users');
    });
  }
}
