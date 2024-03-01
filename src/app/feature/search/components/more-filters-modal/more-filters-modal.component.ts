import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-more-filters-modal',
  templateUrl: './more-filters-modal.component.html',
  styleUrls: ['./more-filters-modal.component.scss']
})
export class MoreFiltersModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MoreFiltersModalComponent>,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){
  }

}
