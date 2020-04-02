import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../interfaces/course';
import { TopLevel } from '../interfaces/toplevel';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class GolfService {
  selectedCourse: Data;
  amountOfUsers: number;

  constructor(private http: HttpClient) { }

  getCoursesObservable(): Observable<Course[]> {
    return this.http.get('https://golf-courses-api.herokuapp.com/courses').pipe(
        map((obj: TopLevel) => {
            return obj.courses;
        })
    );
  }

  getCourseObservableById(id: number): Observable<Data> {
    return this.http.get(`https://golf-courses-api.herokuapp.com/courses/${id}`).pipe(
        map((obj: TopLevel) => {
            return obj.data;
        })
    )
  }

  setSelectedCourse(course: Data): void {
    this.selectedCourse = course;
  }

  setAmountOfUsers(amount: number): void {
    this.amountOfUsers = amount;
  }
}
