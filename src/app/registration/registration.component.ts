import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
export function minimumAgeValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const value = control.value;
    if (!value) return null;

    const dob = new Date(value);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age < minAge ? { underage: true } : null;
  };
}


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  router: any;

  get phone() {
    return this.registrationForm?.get('phone');
  }

  get phoneErrors() {
    if (!this.phone) return null;
    return {
      required: this.phone.touched && this.phone.errors?.['required'],
      pattern: this.phone.touched && this.phone.errors?.['pattern'],
    };
  }

  get email() {
    return this.registrationForm?.get('email');
  }

  get emailErrors() {
    if (!this.email) return null;
    return {
      required: this.email.touched && this.email.errors?.['required'],
      pattern: this.email.touched && this.email.errors?.['email'],
    };
  }

  sendOtp(): void {
  const emailControl = this.email;
  if (!emailControl || emailControl.invalid) {
    emailControl?.markAsTouched();
    return;
  }

  const emailValue = emailControl.value;
  console.log('Sending OTP to:', emailValue);
  alert(`OTP sent to ${emailValue}`);
}

otpSent: boolean = false;
emailVerified: boolean = false;
enteredOtp: string = '';
generatedOtp: string = '';

// Getters already defined for email

sendvOtp() {
  if (this.email?.invalid) {
    this.email.markAsTouched();
    return;
  }

  this.generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
  this.otpSent = true;
  console.log('OTP Sent:', this.generatedOtp);
  alert(`OTP sent to ${this.email?.value}: ${this.generatedOtp}`);
}

verifyOtp(): void {
  const enteredOtp = this.registrationForm.get('otp')?.value;
  if (enteredOtp === this.generatedOtp) {
    this.emailVerified = true;
    this.otpSent = false;
    alert('Email verified successfully!');
  } else {
    alert('Invalid OTP. Please try again.');
  }
}



get dob() {
  return this.registrationForm?.get('dob');
}

get dobErrors() {
  if (!this.dob) return null;
  return {
    required: this.dob.touched && this.dob.errors?.['required'],
    underage: this.dob.touched && this.dob.errors?.['underage'],
  };
}

get password() {
  return this.registrationForm?.get('password');
}

get passwordErrors() {
  if (!this.password) return null;
  return {
    required: this.password.touched && this.password.errors?.['required'],
    minLength: this.password.touched && this.password.errors?.['minlength'],
    pattern: this.password.touched && this.password.errors?.['pattern']
  };
}

get firstName() {
  return this.registrationForm?.get('firstName');
}

get firstNameErrors() {
  if (!this.firstName) return null;
  return {
    required: this.firstName.touched && this.firstName.errors?.['required'],
  };
}



  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: [''],
        dob: ['', [Validators.required, minimumAgeValidator(18)]],
        gender: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        pinCode: ['', [Validators.required]],
        timeZone: ['', Validators.required],
        email: [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],
        phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        password: ['', [Validators.required,Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
        confirmPassword: ['', Validators.required,],
         otp: [''],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  ngOnInit(): void {
  }

  passwordMatchValidator: ValidatorFn = (
    group: AbstractControl
  ): { [key: string]: boolean } | null => {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  };

  onSubmit(): void {
    console.log('hi');
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    const formData = { ...this.registrationForm.value };
    delete formData.confirmPassword; // Remove confirmPassword before sending to backend
    console.log(formData);
    this.http
      .post('http://localhost:8080/api/user/register', formData)
      .subscribe({
        next: (res) => {
          console.log('Registration successful', res);
          alert('Registration successful!');
          this.registrationForm.reset();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error during registration', err);
          alert('Registration failed.');
        },
      });
  }
}
