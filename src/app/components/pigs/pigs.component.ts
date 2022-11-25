import { Component, OnInit } from '@angular/core';

// TODO: REMOVE THIS LATER, THIS NEEDS TO COME FROM THE API
import {Pig} from '../../Pig';
import {PIGS} from '../../mock-pigs';

@Component({
  selector: 'app-pigs',
  templateUrl: './pigs.component.html',
  styleUrls: ['./pigs.component.css']
})
export class PigsComponent implements OnInit{
  
  pigs: Pig[] = PIGS;

  constructor() { }

  ngOnInit(): void {

  }


}
