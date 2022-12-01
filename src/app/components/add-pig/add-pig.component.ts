import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pig',
  templateUrl: './add-pig.component.html',
  styleUrls: ['./add-pig.component.css']
})
export class AddPigComponent implements OnInit {

  pigForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

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
    this.router.navigateByUrl('/');
   }
}
