import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-devicesign-ins',
  imports: [CommonModule, SidebarComponent,RouterModule],
  templateUrl: './devicesign-ins.component.html',
  styleUrl: './devicesign-ins.component.css'
})
export class DevicesignInsComponent {
   devices = [
    {
      name: 'Desktop',
      location: 'Hyderabad, Telangana, India',
      initials: 'DE'
    }
  ];

}
