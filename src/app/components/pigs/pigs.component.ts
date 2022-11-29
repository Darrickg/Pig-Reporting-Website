import { Component, OnInit } from '@angular/core';

// TODO: REMOVE THIS LATER, THIS NEEDS TO COME FROM THE API, ALSO MOVED TO THE SERVICE LMAO
import {Pig} from '../../Pig';
import { PigService } from '../../services/pig.service'

@Component({
  selector: 'app-pigs',
  templateUrl: './pigs.component.html',
  styleUrls: ['./pigs.component.css']
})
export class PigsComponent implements OnInit{
  
  pigs: Pig[] = [];

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
}
