import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";
@Component({
  selector: 'app-password',
  imports: [FormsModule, SidebarComponent,RouterModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  showCurrent = false;
  showNew = false;
  showConfirm = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    // Implement password change logic
    alert('Password changed successfully!');
  }

  onClose() {
    this.router.navigate(['/profile']);
  }

}
