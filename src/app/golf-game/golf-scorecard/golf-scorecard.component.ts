import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { GolfService } from "../golf.service";
import { Data } from "src/app/interfaces/data";
import { Hole } from "src/app/interfaces/hole";
import { Player } from "src/app/interfaces/player";
import { OtherInfo } from "../../interfaces/otherinfo";
import { Subscription } from "rxjs";

@Component({
  selector: "app-golf-scorecard",
  templateUrl: "./golf-scorecard.component.html",
  styleUrls: ["./golf-scorecard.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class GolfScorecardComponent implements OnInit, OnDestroy {
  players: Player[];

  selectedCourseName: string;

  selectedCourse: Data;
  numberOfPlayers: number;
  teeSelection: string;
  numberOfHoles: number;
  holesArray: Hole[];

  a1: number[] = [];
  a2: number[] = [];
  a3: number[] = [];

  parObj: OtherInfo = {
    inTotal: 0,
    outTotal: 0,
    total: 0,
  };
  hcpObj: OtherInfo = {
    inTotal: 0,
    outTotal: 0,
    total: 0,
  };
  yardsObj: OtherInfo = {
    inTotal: 0,
    outTotal: 0,
    total: 0,
  };

  getUserInputObservableSubscription: Subscription;
  getPlayerDataSubscription: Subscription;

  error: boolean = false;
  errorMessage: string;

  playerResults: string[] = [];

  constructor(
    private golfService: GolfService
  ) {}

  ngOnInit(): void {
    this.getUserInputObservableSubscription = this.golfService
      .getUserInputObservable()
      .subscribe((data) => {
        this.selectedCourseName = data.selectedCourse.name;
        this.selectedCourse = data.selectedCourse;
        this.numberOfPlayers = data.amountOfUsers;
        this.teeSelection = data.teeSelection;
        this.numberOfHoles = data.selectedCourse.holeCount;
        this.holesArray = data.selectedCourse.holes;

        this.producePlaceholderArrays();
        this.produceOtherScorecardInfo();

        this.getPlayerDataSubscription = this.golfService
          .getPlayerData()
          .subscribe((players) => {
            this.players = this.sanitizeScores(players);
            $(document).ready(() => {
              for (let i of this.a3) {
                this.isFinished(i - 1);
              }
            });
          });
      });
  }

  ngOnDestroy(): void {
    this.getUserInputObservableSubscription.unsubscribe();
    this.getPlayerDataSubscription.unsubscribe();
  }

  produceOtherScorecardInfo(): void {
    for (let i = 0; i < this.numberOfHoles; i++) {
      if (i < this.numberOfHoles / 2) {
        this.parObj.outTotal += this.holesArray[i].teeBoxes[0].par;
        this.hcpObj.outTotal += this.holesArray[i].teeBoxes[0].hcp;
        this.yardsObj.outTotal += this.holesArray[i].teeBoxes[0].yards;
      } else {
        this.parObj.inTotal += this.holesArray[i].teeBoxes[0].par;
        this.hcpObj.inTotal += this.holesArray[i].teeBoxes[0].hcp;
        this.yardsObj.inTotal += this.holesArray[i].teeBoxes[0].yards;
      }
    }

    this.parObj.total = this.parObj.outTotal + this.parObj.inTotal;
    this.hcpObj.total = this.hcpObj.outTotal + this.hcpObj.inTotal;
    this.yardsObj.total = this.yardsObj.outTotal + this.yardsObj.inTotal;
  }

  producePlaceholderArrays(): void {
    for (let i = 1; i <= this.numberOfHoles; i++) {
      if (i < this.numberOfHoles / 2 + 1) {
        this.a1.push(i);
      } else {
        this.a2.push(i);
      }
    }

    for (let i = 1; i <= this.numberOfPlayers; i++) {
      this.a3.push(i);
    }
  }

  loseFocus($event): void {
    $event.target.value = "";
    this.error = false;
    this.errorMessage = "";
  }

  enterScore($event, holeNum, playerIndex) {
    const player: Player = this.players[playerIndex];
    this.error = false;
    this.errorMessage = "";
    if ($event.key === "Enter") {
      const numInput = Number($event.target.value);
      if (Number.isInteger(numInput) && numInput > 0) {
        this.updateScores(holeNum, numInput, player);
        $event.target.placeholder = numInput;
        $event.target.value = "";
        this.isFinished(playerIndex);
      } else {
        $event.target.value = "";
        this.error = true;
        this.errorMessage = "That is not a valid input";
      }
    }
  }

  updateScores(holeNum, score, player) {
    if (holeNum + 1 <= this.numberOfHoles / 2) {
      player.outScores[holeNum] = score;
    } else {
      player.inScores[holeNum - this.numberOfHoles / 2] = score;
    }

    player.totalScores[holeNum] = score;
  }

  sanitizeScores(players): Player[] {
    for (let player of players) {
      if (player.inScores.length === 0) {
        for (let i = 0; i < this.numberOfHoles / 2; i++) {
          player.inScores[i] = null;
        }
      }

      if (player.outScores.length === 0) {
        for (let i = 0; i < this.numberOfHoles / 2; i++) {
          player.outScores[i] = null;
        }
      }

      if (player.totalScores.length === 0) {
        for (let i = 0; i < this.numberOfHoles; i++) {
          player.totalScores[i] = null;
        }
      }
    }

    return players;
  }

  enterPlayerName($event, playerIndex) {
    const value = $event.target.value;
    this.error = false;
    this.errorMessage = "";
    if ($event.key === "Enter") {
      if (value === "") {
        this.error = true;
        this.errorMessage = "Name cannot be empty";
      } else {
        this.players[playerIndex].name = value;
        $event.target.placeholder = value;
        this.isFinished(playerIndex);
      }
      $event.target.value = "";
    }
  }

  isFinished(playerIndex) {
    const player: Player = this.players[playerIndex];
    let check = true;
    for (let i = 0; i < this.numberOfHoles; i++) {
      if (player.totalScores[i] === null) {
        check = false;
        break;
      }
    }

    if (player.totalScores.length === this.numberOfHoles && check) {
      let par = Number($("#parTotal").html());
      let totalScore = this.getScores("total", player);
      if (par === totalScore) {
        this.playerResults[playerIndex] = `${player.name}'s score is on par`;
      } else if (totalScore > par) {
        this.playerResults[playerIndex] = `${player.name}'s score is ${
          totalScore - par
        } more than par`;
      } else {
        this.playerResults[playerIndex] = `${player.name}'s score is ${
          par - totalScore
        } less than par`;
      }
    }
  }

  getScores(type, player) {
    if (type === "in") {
      return player.inScores.reduce((previous, current) => previous + current);
    } else if (type === "out") {
      return player.outScores.reduce((previous, current) => previous + current);
    } else if (type === "total") {
      return player.totalScores.reduce(
        (previous, current) => previous + current
      );
    }
  }

  saveCurrentGameInfo(): void {
    this.golfService.writeToPlayerData(this.players, true).then((_) => {
      $("#saved-game-user-feedback").css("display", "inline");
      setTimeout(() => {
        $("#saved-game-user-feedback").css("display", "none");
      }, 2000);
    });
  }
}
