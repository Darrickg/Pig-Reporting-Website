import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Pig} from '../../Pig';
import { PigService } from '../../services/pig.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoPopupComponent } from '../info-popup/info-popup.component';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs';
import { Loc } from 'src/app/Loc';
import { LocsService } from 'src/app/services/locs.service';

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

  openDialog(pig: Pig) {
    this.router.navigateByUrl('/more-info');
    // this.dialogRef.open(InfoPopupComponent);
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
