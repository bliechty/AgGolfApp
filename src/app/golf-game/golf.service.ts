import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../interfaces/course';
import { TopLevel } from '../interfaces/toplevel';
import { Data } from '../interfaces/data';
import { User } from '../interfaces/user';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GolfService {
  constructor(
    private http: HttpClient,
    private db: AngularFirestore
  ) { }

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

  getUserInputObservable(): Observable<User> {
    return this.db.collection('user-input').doc<User>('1JqzeoKuTBHew0tVfSCq').valueChanges();
  }

  writeToUserInputByName(key: string, value: Data | number | string): Promise<void> {
    const userObj = {}
    userObj[key] = value;
    return this.db.collection('user-input').doc<User>('1JqzeoKuTBHew0tVfSCq').update(userObj);
  }
}
