import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pig } from 'src/app/Pig';

@Component({
  selector: 'app-pig-item',
  templateUrl: './pig-item.component.html',
  styleUrls: ['./pig-item.component.css']
})
export class PigItemComponent implements OnInit {

  @Input() pig!: Pig;
  @Output() onDeletePig: EventEmitter<Pig> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { 
    console.log(this.pig);
  }

  onDelete(pig: Pig) {
    // console.log(pig, "will be deleted")
    this.onDeletePig.emit(pig);
  }
}
