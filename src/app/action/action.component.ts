import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import {DialogOverviewExampleDialog} from './dialog-overview-example-dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
  }

}
