import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css',
})
export class ForgotPasswordComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private router = inject(Router);

  forgotPasswordForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  onSubmit(): void {
    if (this.forgotPasswordForm.invalid) {
      this.forgotPasswordForm.markAllAsTouched();
      return;
    }

    const emailPayload = this.forgotPasswordForm.value;

    this.http.post('http://localhost:8080/api/user/forgot-password', emailPayload).subscribe({
      next: (res) => {
        console.log('Reset email sent successfully:', res);
        alert('Password reset email sent!');
        this.router.navigate(['/verify-otp']);
      },
      error: (err) => {
        console.error('Error sending reset email:', err);
        alert('Failed to send password reset email.');
      }
    });
  }
}
