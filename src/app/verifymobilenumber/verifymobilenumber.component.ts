import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-verifymobilenumber',
  imports: [FormsModule, SidebarComponent,ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './verifymobilenumber.component.html',
  styleUrl: './verifymobilenumber.component.css'
})
export class VerifymobilenumberComponent {

  otpForm: FormGroup<{ otp: FormControl<string> }>;

  constructor(private fb: FormBuilder, private router: Router) {
    this.otpForm = this.fb.nonNullable.group({
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  verifyOtp() {
    if (this.otpForm.valid) {
      // Handle OTP verification
      console.log('OTP Verified:', this.otpForm.value.otp);
    }
  }

  resendOtp() {
    // Logic to resend OTP
    console.log('OTP Resent');
  }

  goBack() {
    // Logic to go back to previous modal/screen
    this.router.navigate(['/mobile']);
  }

  closeModal() {
    this.router.navigate(['/mobile']);
  }
  
}
