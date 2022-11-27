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
    this.pigService.getPigs().subscribe((pigs) => (this.pigs = pigs ));
  }

}
