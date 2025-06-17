import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-verify-otp-modal',
  templateUrl: './verify-otp-modal.component.html',
    imports: [
    ReactiveFormsModule,RouterModule,
    // other modules
  ]
})
export class VerifyOtpModalComponent {
 otpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<VerifyOtpModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
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
