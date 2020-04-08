import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GolfService } from '../golf.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tee-selection',
  templateUrl: './tee-selection.component.html',
  styleUrls: ['./tee-selection.component.css']
})
export class TeeSelectionComponent implements OnInit, OnDestroy {
  valueNotSelected: boolean = true;
  teeOptions: string[] = [];

  getUserInputObservableSubscription: Subscription;

  constructor(
      private router: Router,
      private golfService: GolfService
  ) { }

  ngOnInit(): void {
    this.getUserInputObservableSubscription = this.golfService.getUserInputObservable().subscribe(data => {
      for (let teeBox of data.selectedCourse.holes[0].teeBoxes) {
        if (teeBox.teeType !== "auto change location") {
          this.teeOptions.push(teeBox.teeType);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.getUserInputObservableSubscription.unsubscribe();
  }

  onSelectChange(): void {
    if (this.valueNotSelected) {
        this.valueNotSelected = false;
    }
  }

  goToScorecard(value: string): void {  
    this.golfService.writeToUserInputByName('teeSelection', value).then(_ => {
      this.router.navigateByUrl('current-game');
    });
  }
}
