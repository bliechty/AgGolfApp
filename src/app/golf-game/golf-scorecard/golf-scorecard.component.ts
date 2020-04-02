import { Component, OnInit } from '@angular/core';
import { GolfService } from '../golf.service';
import { Data } from 'src/app/interfaces/data';

@Component({
  selector: 'app-golf-scorecard',
  templateUrl: './golf-scorecard.component.html',
  styleUrls: ['./golf-scorecard.component.css']
})
export class GolfScorecardComponent implements OnInit {
  amountOfUsers: number;
  selectedCourse: Data;

  constructor(private golfService: GolfService) {
      this.amountOfUsers = this.golfService.amountOfUsers;
      this.selectedCourse = this.golfService.selectedCourse;
  }

  ngOnInit(): void {
  }

}
