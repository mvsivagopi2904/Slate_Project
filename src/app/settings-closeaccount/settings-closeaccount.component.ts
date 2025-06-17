import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-settings-closeaccount',
  imports: [RouterModule, SidebarComponent],
  templateUrl: './settings-closeaccount.component.html',
  styleUrl: './settings-closeaccount.component.css'
})
export class SettingsCloseaccountComponent {

}
