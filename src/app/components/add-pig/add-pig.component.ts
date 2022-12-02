import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { min } from 'rxjs';
import { Loc } from 'src/app/Loc';
import { Pig } from 'src/app/Pig'
import { PigService } from '../../services/pig.service'

@Component({
  selector: 'app-add-pig',
  templateUrl: './add-pig.component.html',
  styleUrls: ['./add-pig.component.css']
})
export class AddPigComponent implements OnInit {

  pigForm!: FormGroup;
  newPig!: Pig;

  // reporterName!: string;
  // phoneNum!: string;
  // pigName!: string;
  // pigBreed!: string;
  // location!: Loc | undefined;
  // note!: string;
  // date!: string;
  // status: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private pigService: PigService) { }

  ngOnInit() {
    // this.pigForm = new FormGroup({
    //   reporterName: new FormControl(null),
    //   phoneNum: new FormControl(null),
    //   pigName: new FormControl(null),
    //   pigBreed: new FormControl(null),
    //   location: new FormControl(null),
    //   note: new FormControl(null),
    // });
    this.initialiseForm();
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
    // console.log(this.pigForm.get('reporterName')!.value);
    // this.router.navigateByUrl('/');
    this.newPig.key = (Math.random() * (999 - 100) + 100).toString();
    // this.newPig.key = "107";
    this.newPig.data.reporterName = this.pigForm.get('reporterName')!.value;
    this.newPig.data.reporterNum = this.pigForm.get('phoneNum')!.value;

    this.newPig.data.pId = this.pigForm.get('pId')!.value;
    this.newPig.data.pigName = this.pigForm.get('pigName')!.value;
    this.newPig.data.pigBreed = this.pigForm.get('pigBreed')!.value;

    this.newPig.data.note = this.pigForm.get('note')!.value;

    this.newPig.data.location.locName = this.pigForm.get('location')!.value;
    this.newPig.data.location.locLat = 1;
    this.newPig.data.location.locLong = 1;

    this.newPig.data.status = false;
    this.newPig.data.time = (new Date()).toString();

    this.pigService.insertPig(this.newPig).subscribe();

    console.log(this.newPig);

    this.router.navigateByUrl('/');
   }
}
