import { Component, OnInit } from "@angular/core";
import { GolfService } from "../golf.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-amount-of-users-selection",
  templateUrl: "./amount-of-users-selection.component.html",
  styleUrls: ["./amount-of-users-selection.component.css"]
})
export class AmountOfUsersSelectionComponent implements OnInit {
  constructor(private golfService: GolfService, private router: Router) {}

  ngOnInit(): void {}

  setAmountOfUsers(amount: number) {
    this.golfService.setAmountOfUsers(amount);
    this.router.navigateByUrl('/current-game');
  }
}
