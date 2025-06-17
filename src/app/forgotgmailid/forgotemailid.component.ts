import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgotemailid',
   imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './forgotemailid.component.html',
  styleUrl: './forgotemailid.component.css',
   standalone: true,
})
export class ForgotemailidComponent {
   forgotEmailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotEmailForm = this.fb.group({
      contact: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.forgotEmailForm.valid) {
      const contact = this.forgotEmailForm.value.contact;
      console.log('Forgot user ID for:', contact);
      // Call your backend API to send reset user ID link
    }
  }

}
