import { Component, OnInit } from "@angular/core";
import { GolfService } from "../golf.service";
import { Data } from "src/app/interfaces/data";
import { Hole } from "src/app/interfaces/hole";
import { Player } from "src/app/interfaces/player";

@Component({
  selector: "app-golf-scorecard",
  templateUrl: "./golf-scorecard.component.html",
  styleUrls: ["./golf-scorecard.component.css"]
})
export class GolfScorecardComponent implements OnInit {
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

  constructor(
    private golfService: GolfService
  ) {}

  ngOnInit(): void {
    this.golfService.getUserInputObservable().subscribe((data) => {
      this.selectedCourseName = data.selectedCourse.name;
      this.selectedCourse = data.selectedCourse;
      this.numberOfPlayers = data.amountOfUsers;
      this.teeSelection= data.teeSelection;
      this.numberOfHoles = data.selectedCourse.holeCount;
      this.holesArray = data.selectedCourse.holes;

      this.producePlaceholderArrays();
    });

    this.golfService.getPlayerData().subscribe((players) => {
      this.players = players;
    });
  }

  // displayPlayers(): void {
  //   console.log(this.players);
  // }

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
    $event.target.value = '';
    $('.error').css('display', 'none');
    $('.error').html('');
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

  enterPlayerName($event, playerIndex) {
    const value = $event.target.value;
    $('.error').css('display', 'none');
    $('.error').html('');
    if ($event.key === 'Enter') {
        if (value === '') {
            $('.error').css('display', 'block');
            $('.error').html('Name cannot be empty');
        } else if (this.duplicate(value)) {
            $('.error').css('display', 'block');
            $('.error').html('Duplicate name, try again');
        } else {
            this.players[playerIndex].name = value;
            $event.target.placeholder = value;
            this.isFinished(playerIndex);
        }
        $event.target.value = '';
    }
  }

  duplicate(name) {
    return this.players.some(player => player.name === name);
  }

  isFinished(playerIndex) {
    const player: Player = this.players[playerIndex];
    let check = true;
    for (let i = 0; i < this.numberOfHoles; i++) {
        if (player.totalScores[i] === undefined) {
            check = false;
            break;
        }
    }

    if (player.totalScores.length === this.numberOfHoles && check) {
        let par = Number($('#parTotal').html());
        let totalScore = this.getScores('total', player);
        if (player.display === false) {
            if (par === totalScore) {
                $('.player-total-score-container').append(`<div id='player${playerIndex + 1}total' class='player-total-score'>
                        ${player.name}'s score is on par
                    </div>`);
            } else if (totalScore > par) {
                $('.player-total-score-container').append(`<div id='player${playerIndex + 1}total' class='player-total-score'>
                        ${player.name}'s score is ${totalScore - par} more than par
                    </div>`);
            } else {
                $('.player-total-score-container').append(`<div id='player${playerIndex + 1}total' class='player-total-score'>
                        ${player.name}'s score is ${par - totalScore} less than par
                    </div>`);
            }
            player.display = true;
        } else {
            if (par === totalScore) {
                $(`#player${playerIndex + 1}total`).html(`${player.name}'s score is on par`);
            } else if (totalScore > par) {
                $(`#player${playerIndex + 1}total`).html(`${player.name}'s score is ${totalScore - par} more than par`);
            } else {
                $(`#player${playerIndex + 1}total`).html(`${player.name}'s score is ${par - totalScore} less than par`);
            }
        }
     }
  }

  getScores (type, player) {
    if (type === 'in') {
        return player.inScores.reduce((previous, current) => previous + current);
    } else if (type === 'out') {
        return player.outScores.reduce((previous, current) => previous + current);
    } else if (type === 'total') {
        return player.totalScores.reduce((previous, current) => previous + current);
    }
  }
}