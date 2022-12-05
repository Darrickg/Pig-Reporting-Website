import { Component, Inject, Input, OnInit } from '@angular/core';
import { Pig } from 'src/app/Pig';
import { Router } from '@angular/router';
import { PigService } from 'src/app/services/pig.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../pigs/pigs.component';

@Component({
  selector: 'app-info-popup',
  templateUrl: './info-popup.component.html',
  styleUrls: ['./info-popup.component.css']
})
export class InfoPopupComponent{


  constructor(private router: Router, public dialogRef: MatDialogRef<InfoPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  exit() {
    this.dialogRef.close();
  }
}
