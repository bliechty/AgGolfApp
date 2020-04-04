import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { GolfService } from '../golf.service';
import { Data } from 'src/app/interfaces/data';
import {
  displayHoles,
  displayScoreCardInfo,
  displayPar,
  displayHandicap,
  displayYardage
} from '../../scripts/action';
import { Hole } from 'src/app/interfaces/hole';

@Component({
  selector: "app-golf-scorecard",
  templateUrl: "./golf-scorecard.component.html",
  styleUrls: ["./golf-scorecard.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class GolfScorecardComponent implements OnInit {
  selectedCourseName: string;

  constructor(
    private golfService: GolfService
  ) {}

  ngOnInit(): void {
    this.golfService.getUserInputObservable().subscribe(data => {
      this.selectedCourseName = data.selectedCourse.name;

      const selectedCourse: Data = data.selectedCourse;
      const numberOfPlayers: number = data.amountOfUsers;
      const teeSelection: string = data.teeSelection;
      const numberOfHoles: number = selectedCourse.holeCount;
      const holesArray: Hole[] = selectedCourse.holes;

      displayHoles(numberOfHoles);
      displayScoreCardInfo(numberOfHoles, numberOfPlayers);
      displayPar(holesArray, numberOfHoles);
      displayYardage(holesArray, numberOfHoles, teeSelection);
      displayHandicap(holesArray, numberOfHoles);
    });
  }
}
