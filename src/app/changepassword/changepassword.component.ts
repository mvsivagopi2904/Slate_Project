import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-changepassword',
  imports: [SidebarComponent,RouterModule],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css',

})
export class ChangepasswordComponent {
    constructor(private router: Router) {}

  goToChangePassword() {
    this.router.navigate(['/Password']);
  }

}
