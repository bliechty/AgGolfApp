import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { GolfService } from "../golf.service";
import { Data } from "src/app/interfaces/data";
import {
  displayHoles,
  displayScoreCardInfo,
  displayPar,
  displayHandicap,
  displayYardage,
} from "../../scripts/action";
import { Hole } from "src/app/interfaces/hole";
import { Player } from "src/app/interfaces/player";
import * as angular from 'angular';

@Component({
  selector: "app-golf-scorecard",
  templateUrl: "./golf-scorecard.component.html",
  styleUrls: ["./golf-scorecard.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class GolfScorecardComponent implements OnInit {
  selectedCourseName: string;
  players: Player[];

  constructor(private golfService: GolfService) {}

  ngOnInit(): void {
    this.golfService.getUserInputObservable().subscribe((data) => {
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

    this.golfService.getPlayerData().subscribe((players) => {
      this.players = players;
    });
  }

  loseFocus(el) {
    $(el).val("");
    $(".error").css("display", "none");
    $(".error").html("");
  }

  // enterScore(e, el, playerNum, holeNum, numOfHoles) {
  //   $(".error").css("display", "none");
  //   $(".error").html("");
  //   if (e.which === 13) {
  //     let numInput = Number($(el).val());
  //     if (Number.isInteger(numInput) && numInput > 0) {
  //       players.collection[playerNum - 1].updateScores(playerNum, holeNum, numInput, numOfHoles);
  //       $(el).attr("placeholder", numInput);
  //       $(el).val("");
  //       players.collection[playerNum - 1].isFinished(numOfHoles, playerNum);
  //     } else {
  //       $(el).val("");
  //       $(".error").css("display", "block");
  //       $(".error").html("That is not a valid input");
  //     }
  //   }
  // }

  // enterPlayerName(e, el, playerIndex, numberOfHoles) {
  //   $('.error').css('display', 'none');
  //   $('.error').html('');
  //   if (e.which === 13) {
  //       if ($(el).val() === '') {
  //           $('.error').css('display', 'block');
  //           $('.error').html('Name cannot be empty');
  //       } else if (players.duplicate($(el).val())) {
  //           $('.error').css('display', 'block');
  //           $('.error').html('Duplicate name, try again');
  //       } else {
  //           players.collection[playerIndex].name = $(el).val();
  //           $(el).attr('placeholder', `${$(el).val()}`);
  //           players.collection[playerIndex].isFinished(numberOfHoles, playerIndex + 1);
  //       }
  //       $(el).val('');
  //   }
  // }
}