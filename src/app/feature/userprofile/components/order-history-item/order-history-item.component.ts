import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../../shared.service';
import { OrderHistoryItemModel } from '../order-history/order-history.component';

@Component({
  selector: 'app-order-history-item',
  templateUrl: './order-history-item.component.html',
  styleUrls: ['./order-history-item.component.scss']
})
export class OrderHistoryItemComponent implements OnInit {
  @Input() model: OrderHistoryItemModel;
  @Input() rowHeight: number = 1;
  @Input() gutterSize: number = 1.02;
  @ViewChild('reservationItem') reservationItem: ElementRef;

  public rows: number = 0;

  constructor(public dialog: MatDialog, public sharedService: SharedService) {
  }

  @HostListener('window:resize')
  calculateRows() {
    this.rows = Math.floor(this.reservationItem.nativeElement.offsetHeight / (this.rowHeight + this.gutterSize));
  }

  openReviewCommentDialog() {
    const dialogRef = this.dialog.open(AddReviewCommentModalComponent, {
      panelClass: 'modal--small'
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.sharedService.tabSelection.subscribe(tabNumber => {
      if (tabNumber === 1) {
        setTimeout(() => {
          this.calculateRows();

        });
      }
    });
  }

}

@Component({
  selector: 'app-add-review-comment-modal',
  templateUrl: 'add-review-comment-modal.html',
})
export class AddReviewCommentModalComponent {

}
