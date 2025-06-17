import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: 'app-emailaddress',
  imports: [RouterModule, SidebarComponent],
  templateUrl: './emailaddress.component.html',
  styleUrl: './emailaddress.component.css',
  standalone: true,
})
export class EmailaddressComponent {
  constructor(private router: Router) {}


   onAddEmail() {
    this.router.navigate(['/addemailmodal']);
    
    // Future: Show input field or modal
    
  }
}
