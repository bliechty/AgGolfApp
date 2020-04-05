import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { GolfService } from '../golf.service';

@Component({
  selector: "app-amount-of-users-selection",
  templateUrl: "./amount-of-users-selection.component.html",
  styleUrls: ["./amount-of-users-selection.component.css"]
})
export class AmountOfUsersSelectionComponent implements OnInit {
  constructor(
    private router: Router,
    private golfService: GolfService
  ) {}

  ngOnInit(): void {}

  setAmountOfUsers(amount: number) {
    this.golfService.writeToUserInputByName('amountOfUsers', amount).then(_ => {
      const players = [];
      for (let i = 0; i < amount; i ++) {
        players.push({
          name: `player${i + 1}`,
          display: false,
          inScores: [],
          outScores: [],
          totalScores: []
        });
      }
      this.golfService.writeToPlayerData(players).then(_ => {
        this.router.navigateByUrl('/tee-selection');
      })
    });
  }
}
