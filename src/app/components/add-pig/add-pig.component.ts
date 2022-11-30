import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-pig',
  templateUrl: './add-pig.component.html',
  styleUrls: ['./add-pig.component.css']
})
export class AddPigComponent implements OnInit {

  pigForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initialiseForm();
   }

   initialiseForm(): void {
    this.pigForm = this.fb.group({
      reporterName: '',
      reporterNum: '',
      pigName: '',
      pigBreed: '',
      location: '',
      note: ''
    })
   }

   onSubmit(): void {
    console.log("submit button clicked");
    console.log(this.pigForm);
   }
}
