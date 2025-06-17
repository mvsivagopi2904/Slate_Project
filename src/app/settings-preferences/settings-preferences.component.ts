import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings-preferences',
  imports: [CommonModule, FormsModule, SidebarComponent,RouterModule],
  templateUrl: './settings-preferences.component.html',
  styleUrl: './settings-preferences.component.css',
  standalone: true,
})
export class SettingsPreferencesComponent {
  dateFormat: string = 'dd/MM/yy';
  notifications = {
    signinAlert: false,
    thirdPartyAccess: false,
    newsletter: false
  };

}
