import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-otp-email',
  imports: [FormsModule, SidebarComponent,RouterModule],
  templateUrl: './otp-email.component.html',
  styleUrl: './otp-email.component.css'
})
export class OtpEmailComponent {
  // email: string = '';
  // @Output() emailSubmitted = new EventEmitter<string>();
  // @Output() closed = new EventEmitter<void>();

  // submit() {
  //   if (this.email) {
  //     this.emailSubmitted.emit(this.email);
  //   }
  // }

  // close() {
  //   this.closed.emit();
    
  // }
otp: string = '';

verifyOtp() {
  if (this.otp.length === 6) {
    // call API to verify
    alert('OTP verified!');
  } else {
    alert('Please enter valid OTP');
  }
}

resendOtp() {
  alert('Resending OTP...');
}

goBack() {
  // Navigate back or close modal
}
}
