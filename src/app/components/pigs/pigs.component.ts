import { Component, EventEmitter, Inject, InjectionToken, Input, OnInit, Output } from '@angular/core';
import {Pig} from '../../Pig';
import { PigService } from '../../services/pig.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfoPopupComponent } from '../info-popup/info-popup.component';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs';
import { Loc } from 'src/app/Loc';
import { LocsService } from 'src/app/services/locs.service';
import { PasswordComponent } from 'src/app/password/password.component';


export interface DialogData {
  name: string,
  pId: string,
  pigBreed: string,
  locName: string,
  time: string,
  note: string,
  reporterName: string,
  reporterNum: string
}

export interface PasswordData {
  password: string;
}

@Component({ 
  selector: 'app-pigs',
  templateUrl: './pigs.component.html',
  styleUrls: ['./pigs.component.css']
})
export class PigsComponent implements OnInit{
  
  @Input() pig!: Pig;
  @Output() onDeletePig: EventEmitter<Pig> = new EventEmitter();
  @Output() onToggleStatus: EventEmitter<Pig> = new EventEmitter();
  pigs: Pig[] = [];
  locs: Loc[] = [];
  password: string = '';
  // display: string = 'BEFORE';
  // private pigSource = new BehaviorSubject<Pig>(this.pig);
  // currentPig = this.pigSource.asObservable()

  constructor(private pigService: PigService, private locsService: LocsService, private dialogRef: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.pigService.getPigs().subscribe((pigs) => {this.pigs = pigs
    console.log(this.pigs[0].data)});

    this.locsService.getLocs().subscribe((locs) => {this.locs = locs
      console.log(this.locs[0].data)});
  }

  deletePig(pig: Pig) {
    for (var i = 0; i < this.locs.length; i++)
    {
      if ((pig.data.location.locName === this.locs[i].data.name) && (pig.data.location.locLat === this.locs[i].data.lat) && (pig.data.location.locLong === this.locs[i].data.long))
      {
        this.locs[i].data.count = this.locs[i].data.count - 1;
        this.locsService.updateLocCount(this.locs[i]).subscribe();
      }
    }

    this.pigService.deletePig(pig).subscribe(() => (this.pigs = this.pigs.filter(t => t.key !== pig.key)));
  }

  toggleStatus(pig: Pig) {
    pig.data.status = !pig.data.status;
    this.pigService.updatePigStatus(pig).subscribe();
    // console.log(pig.data.status);
  }

  openDialog(pig: Pig): void {
    const dialogRef = this.dialogRef.open(InfoPopupComponent, {
      height: 'fit',
      width: '500px',
      data: {
        name: pig.data.pigName,
        pId: pig.data.pId,
        pigBreed: pig.data.pigBreed,
        locName: pig.data.location.locName,
        time: pig.data.time,
        note: pig.data.note,
        reporterName: pig.data.reporterName,
        reporterNum: pig.data.reporterNum
      }
    });
  }

  sortByLoc(pigs: Pig[]): void {
    pigs.sort((a, b) => {
        if (a.data.location.locName > b.data.location.locName)
        {
          return 1;
        }
        else {
          return -1;
        }
      }
    );
  }

  sortByReporter(pigs: Pig[]): void {
    pigs.sort((a, b) => {
        if (a.data.reporterName > b.data.reporterName)
        {
          return 1;
        }
        else {
          return -1;
        }
      }
    );
  }

  sortByTime(pigs: Pig[]): void {
    pigs.sort((a, b) => {
        if (a.data.time > b.data.time)
        {
          return 1;
        }
        else {
          return -1;
        }
      }
    );
  }

  sortByStatus(pigs: Pig[]): void {
    pigs.sort((a, b) => {
        if (a.data.status > b.data.status)
        {
          return 1;
        }
        else {
          return -1;
        }
      }
    );
  }
}