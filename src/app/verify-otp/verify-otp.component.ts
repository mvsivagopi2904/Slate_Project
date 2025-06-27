import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent {
  otp: string = '';

  constructor(private router: Router) {}

 onVerifyOtp(): void {
  if (this.otp === '123456') {
    alert('OTP verified successfully!');
    setTimeout(() => {
      this.router.navigate(['/resetpassword']);
    }, 0);
  } else {
    alert('Invalid OTP. Please try again.');
  }
}


  goBack(): void {
    this.router.navigate(['/login']); // Change as needed
  }
}
