import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, PasswordData } from '../components/pigs/pigs.component';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  passwordForm!: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PasswordComponent>, @Inject(MAT_DIALOG_DATA) public data: PasswordData) {

  }

  ngOnInit() {
    this.initialiseForm();
  }

  initialiseForm(): void {
    this.passwordForm = this.fb.group({
      password: ''
    })
  }

  onSubmit(): void {
    this.data.password = this.passwordForm.get('password')!.value.data.lat
  }

  exit(): void {
    this.dialogRef.close();
  }
}
