import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tee-selection',
  templateUrl: './tee-selection.component.html',
  styleUrls: ['./tee-selection.component.css']
})
export class TeeSelectionComponent implements OnInit {
  valueNotSelected: boolean = true;

  constructor(
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSelectChange(): void {
    if (this.valueNotSelected) {
        this.valueNotSelected = false;
    }
  }

  goToScorecard(): void {
    this.router.navigateByUrl('current-game');
  }
}
