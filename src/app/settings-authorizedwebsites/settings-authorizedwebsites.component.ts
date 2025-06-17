import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings-authorizedwebsites',
  imports: [SidebarComponent,RouterModule],
  templateUrl: './settings-authorizedwebsites.component.html',
  styleUrl: './settings-authorizedwebsites.component.css'
})
export class SettingsAuthorizedwebsitesComponent {

}
