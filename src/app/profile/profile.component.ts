import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

var gmail="abcd@gmail.com";
@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {
  constructor(private router: Router) {}

  
  editProfile() {
    this.router.navigate(['/edit-profile']);
  }
  showProfileDetails = false;

  onSignOutClick() {
    this.showProfileDetails = true;
  }

}

