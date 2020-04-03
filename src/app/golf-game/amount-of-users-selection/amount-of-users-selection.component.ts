import { Component, OnInit, Inject } from "@angular/core";
import { GolfService } from "../golf.service";
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: "app-amount-of-users-selection",
  templateUrl: "./amount-of-users-selection.component.html",
  styleUrls: ["./amount-of-users-selection.component.css"]
})
export class AmountOfUsersSelectionComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}

  ngOnInit(): void {}

  setAmountOfUsers(amount: number) {
    this.storage.set("amountOfUsers", amount);
    this.router.navigateByUrl('/tee-selection');
  }
}
