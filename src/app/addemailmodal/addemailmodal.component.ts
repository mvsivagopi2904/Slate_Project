
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-addemailmodal',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterModule, SidebarComponent],
  templateUrl: './addemailmodal.component.html',
  styleUrls: ['./addemailmodal.component.css'],
  standalone: true
})
export class AddemailmodalComponent {

emailForm!: FormGroup<{ email: FormControl<string> }>;
  constructor(private fb: FormBuilder, private router: Router) {
    this.emailForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitEmail() {
    if (this.emailForm.valid) {
      const email = this.emailForm.value.email;
      console.log('Sending OTP to:', email);
      // Call your OTP service here
    this.router.navigate(['/OtpEmailComponent']);
    }
  }

  closeModal() {
    // Implement modal close logic
    console.log('Modal closed');
  }
}
