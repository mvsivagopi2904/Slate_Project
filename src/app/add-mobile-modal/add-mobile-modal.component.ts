import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { VerifyOtpModalComponent } from '../verify-otp-modal/verify-otp-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-add-mobile-modal',
  templateUrl: './add-mobile-modal.component.html',
  styleUrls:['./add-mobile-modal.component.css'],
  standalone: true,

   imports: [ReactiveFormsModule, SidebarComponent,CommonModule, FormsModule, RouterModule],
})
export class AddMobileModalComponent {
  mobileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.mobileForm = this.fb.group({
      countryCode: ['+91', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  closeModal() {
    // logic to hide modal or navigate away
  }

  submitMobile() {
    if (this.mobileForm.valid) {
      const { countryCode, mobileNumber } = this.mobileForm.value;
      console.log(`Sending OTP to: ${countryCode}${mobileNumber}`);
      // Proceed with OTP send logic
    }
  }
}