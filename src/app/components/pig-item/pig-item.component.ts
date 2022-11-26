import { Component, OnInit, Input } from '@angular/core';
import { Pig } from 'src/app/Pig';

@Component({
  selector: 'app-pig-item',
  templateUrl: './pig-item.component.html',
  styleUrls: ['./pig-item.component.css']
})
export class PigItemComponent implements OnInit {

  @Input() pig!: Pig;

  constructor() { }

  ngOnInit(): void { 

  }

  toggleDeletePig() {
    console.log("delete pig button")
  }
}
