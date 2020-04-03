import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-tee-selection',
  templateUrl: './tee-selection.component.html',
  styleUrls: ['./tee-selection.component.css']
})
export class TeeSelectionComponent implements OnInit {
  valueNotSelected: boolean = true;

  constructor(
      private router: Router,
      @Inject(LOCAL_STORAGE) private storage: StorageService
  ) { }

  ngOnInit(): void {
  }

  onSelectChange(): void {
    if (this.valueNotSelected) {
        this.valueNotSelected = false;
    }
  }

  goToScorecard(value: string): void {
    this.storage.set("selectedTee", value);
    this.router.navigateByUrl('current-game');
  }
}
