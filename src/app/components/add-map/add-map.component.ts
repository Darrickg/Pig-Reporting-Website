import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Loc } from 'src/app/Loc';
import { LocsService } from 'src/app/services/locs.service';

@Component({
  selector: 'app-add-map',
  templateUrl: './add-map.component.html',
  styleUrls: ['./add-map.component.css']
})
export class AddMapComponent implements OnInit {
  [x: string]: any;

  locForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private locsService: LocsService) {}

  ngOnInit() {
    this.initialiseForm();
  }

  initialiseForm(): void {
    this.locForm = this.fb.group({
      locName: '',
      lat: 0,
      long: 0,
    })
  }

  onSubmit(): void {
    console.log("submit button clicked");
    console.log(this.locForm);

    const newLoc: Loc = {
      key: (Math.round((Math.random() * (999 - 100) + 100))).toString(),

      data: {
        name: this.locForm.get('locName')!.value,
        lat: this.locForm.get('lat')!.value,
        long: this.locForm.get('long')!.value,
        count: 0
      }
    }

    console.log(newLoc);
    this.locsService.insertLoc(newLoc).subscribe();
    this.router.navigateByUrl('/add-pig');
  }

  return(): void {
    this.router.navigateByUrl('/');
  }
}
