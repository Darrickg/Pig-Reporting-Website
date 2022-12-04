import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Sort} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

// TODO: REMOVE THIS LATER, THIS NEEDS TO COME FROM THE API, ALSO MOVED TO THE SERVICE LMAO
import {Pig} from '../../Pig';
import { PigService } from '../../services/pig.service'

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

  dataSource = this.pigs;
  displayedColumns: string[] = ['location', 'name', 'time', 'status'];

  constructor(private pigService: PigService) { }

  ngOnInit(): void {
    this.pigService.getPigs().subscribe((pigs) => {this.pigs = pigs
    console.log(this.pigs[0].data)});
    // this.pigService.getPigs().subscribe((pigs) => console.log(pigs));
    
    // console.log(this.pigs);
  }

  deletePig(pig: Pig) {
    this.pigService.deletePig(pig).subscribe(() => (this.pigs = this.pigs.filter(t => t.key !== pig.key)));
  }

  toggleStatus(pig: Pig) {
    pig.data.status = !pig.data.status;
    this.pigService.updatePigStatus(pig).subscribe();
    // console.log(pig.data.status);
  }
}