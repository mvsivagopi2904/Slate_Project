import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-verifyemailmodal',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './verifyemailmodal.component.html',
  styleUrl: './verifyemailmodal.component.css'
})
export class VerifyemailmodalComponent {
    otpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<VerifyemailmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  verify() {
    if (this.otpForm.valid) {
      this.dialogRef.close(true);
    }
  }

  resendOtp() {
    alert('OTP resent!');
  }

}
