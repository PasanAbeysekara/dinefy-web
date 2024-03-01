import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PropMenus } from 'src/app/models/api/productInfoModel';

@Component({
  selector: 'app-erg-menu',
  templateUrl: './erg-menu.component.html',
  styleUrls: ['./erg-menu.component.scss']
})
export class ErgMenuComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ErgMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public menus: Array<any>) { }

  ngOnInit(): void {
  }
}
