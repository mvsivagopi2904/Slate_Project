import { Component, OnInit  } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule } from '@angular/router';
declare const google: any;

@Component({
  selector: 'app-settings-linkedaccount',
  imports: [SidebarComponent,RouterModule],
  templateUrl: './settings-linkedaccount.component.html',
  styleUrl: './settings-linkedaccount.component.css'
})
export class SettingsLinkedaccountComponent {
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID', // replace with real client id
      callback: this.handleCredentialResponse.bind(this),
    });

    google.accounts.id.renderButton(
      document.getElementById('googleBtn'),
      { theme: 'outline', size: 'large' }
    );
  }

  handleCredentialResponse(response: any) {
    console.log('Encoded JWT ID token: ' + response.credential);
    // Send this token to your backend for verification and sign-in
  }

}
