import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs';
import { Loc } from 'src/app/Loc';
import { Pig } from 'src/app/Pig'
import { PigService } from '../../services/pig.service'
import { LocsService } from 'src/app/services/locs.service';

@Component({
  selector: 'app-add-pig',
  templateUrl: './add-pig.component.html',
  styleUrls: ['./add-pig.component.css']
})
export class AddPigComponent implements OnInit {

  pigForm!: FormGroup;
  @Input() loc!: Loc;
  locs: Loc[] = [];

  constructor(private locsService: LocsService, private fb: FormBuilder, private router: Router, private pigService: PigService) { }

  ngOnInit() {
    this.initialiseForm();
    this.locsService.getLocs().subscribe((locs) => {this.locs = locs
    console.log(this.locs[0].data)})
   }

   toggleAddLoc() {
    this.router.navigateByUrl('/add-map');
   }

   toggleCount(loc: Loc) {
    loc.data.count += 1;
    this.locsService.updateLocCount(loc).subscribe();
   }

   initialiseForm(): void {
    this.pigForm = this.fb.group({
      reporterName: '',
      phoneNum: '',
      pId: '',
      pigName: '',
      pigBreed: '',
      location: '',
      note: '',
    })
   }

   onSubmit(): void {
    console.log("submit button clicked");
    console.log(this.pigForm);

    const newPig: Pig = {
      key: (Math.round((Math.random() * (999 - 100) + 100))).toString(),

      data: {
        reporterName: this.pigForm.get('reporterName')!.value,
        reporterNum: this.pigForm.get('phoneNum')!.value,
        pigName: this.pigForm.get('pigName')!.value,
        pigBreed: this.pigForm.get('pigBreed')!.value,
        pId: this.pigForm.get('pId')!.value,
        location: {
            locName: this.pigForm.get('location')!.value.data.name,
            locLong: this.pigForm.get('location')!.value.data.long,
            locLat: this.pigForm.get('location')!.value.data.lat
        },
        note: this.pigForm.get('note')!.value,
        time: (new Date()).toString(),
        status: false
      }
    }

    console.log(newPig);
    this.pigService.insertPig(newPig).subscribe();
    this.toggleCount(this.loc);
    this.router.navigateByUrl('/');
   }

   return(): void {
    this.router.navigateByUrl('/');
   }
}
