import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Pig} from '../../Pig';
import { PigService } from '../../services/pig.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoPopupComponent } from '../info-popup/info-popup.component';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs';

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
  // display: string = 'BEFORE';
  // private pigSource = new BehaviorSubject<Pig>(this.pig);
  // currentPig = this.pigSource.asObservable()

  constructor(private pigService: PigService, private dialogRef: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.pigService.getPigs().subscribe((pigs) => {this.pigs = pigs
    console.log(this.pigs[0].data)});
    // this.pigService.getPigs().subscribe((pigs) => console.log(pigs));
    // console.log(this.pigs);
    // this.checkStatus(this.pig.data.status);
  }

  deletePig(pig: Pig) {
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
}