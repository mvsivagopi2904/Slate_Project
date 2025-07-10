import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component"; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  imports: [ReactiveFormsModule, RouterModule, SidebarComponent],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
    standalone: true,
})
export class EditProfileComponent {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      displayName: [''],
      gender: [''],
      country: [''],
      state: [''],
      language: [''],
      timeZone: ['']
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      // Save or navigate
    }
  }

  onCancel() {
    this.profileForm.reset();
  }

}
