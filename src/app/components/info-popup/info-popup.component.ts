import { Component, Input, OnInit } from '@angular/core';
import { Pig } from 'src/app/Pig';
import { Router } from '@angular/router';
import { PigService } from 'src/app/services/pig.service';

@Component({
  selector: 'app-info-popup',
  templateUrl: './info-popup.component.html',
  styleUrls: ['./info-popup.component.css']
})
export class InfoPopupComponent implements OnInit{
  @Input() pig!: Pig;
  pigs: Pig[] = [];

  constructor(private router: Router, private pigService: PigService) {
  }

  ngOnInit() {
    this.pigService.getPigs().subscribe((pigs) => {this.pigs = pigs
    console.log(this.pigs[0].data)});
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
