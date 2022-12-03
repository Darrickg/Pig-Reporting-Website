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
  // newPig!: Pig;

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

    const newPig: Pig = {
      key: (Math.round((Math.random() * (999 - 100) + 100))).toString(),
      // key: "400",

      data: {
        reporterName: this.pigForm.get('reporterName')!.value,
        reporterNum: this.pigForm.get('phoneNum')!.value,
        pigName: this.pigForm.get('pigName')!.value,
        pigBreed: this.pigForm.get('pigBreed')!.value,
        pId: this.pigForm.get('pId')!.value,
        location: {
            locName: this.pigForm.get('location')!.value,
            locLong: 1,
            locLat: 1
        },
        note: this.pigForm.get('note')!.value,
        time: (new Date()).toString(),
        status: false
      }
    }

    console.log(newPig);
    this.pigService.insertPig(newPig).subscribe();

    this.router.navigateByUrl('/');
   }
}
