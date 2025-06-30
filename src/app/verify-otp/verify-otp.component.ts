import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent {
  otp: string = '';
  email: string = ''; // Optional: if your backend needs email with OTP

  constructor(private router: Router, private http: HttpClient) {}

  onVerifyOtp(): void {
    if (!this.otp || this.otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP.');
      return;
    }

    const payload = {
      otp: this.otp,
      email: this.email // Add if backend expects it
    };

    this.http.post('http://localhost:8080/api/user/verify-otp', payload).subscribe({
      next: (res: any) => {
        alert('OTP verified successfully!');
        setTimeout(() => {
          this.router.navigate(['/resetpassword']);
        }, 0);
      },
      error: (err) => {
        console.error('OTP verification failed:', err);
        alert('Invalid OTP. Please try again.');
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/login']);
  }
}
