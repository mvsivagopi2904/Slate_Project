import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  imports:[CommonModule],
})
export class TopbarComponent {
  dropdownOpen = false;

  constructor(private router: Router) {}

  features = [
    { title: 'Employee Management', icon: 'assets/icons/employee.svg', route: '/employee' },
    { title: 'Role Management', icon: 'assets/icons/role.svg', route: '/roles' },
    { title: 'AI-Based Dashboard Customization', icon: 'assets/icons/ai-dashboard.svg', route: '/ai-dashboard' },
    { title: 'User Management', icon: 'assets/icons/user.svg', route: '/users' },
    { title: 'Custom Form Builder', icon: 'assets/icons/form.svg', route: '/forms' },
    { title: 'Admin Management', icon: 'assets/icons/admin.svg', route: '/admin' },
    { title: 'Payments Module', icon: 'assets/icons/payments.svg', route: '/payments' },
    { title: 'API Configurations Module', icon: 'assets/icons/api.svg', route: '/api-config' }
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  navigate(route: string) {
    this.router.navigate([route]);
    this.dropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.topbar-container');
    if (!clickedInside) {
      this.dropdownOpen = false;
    }
  }
}
