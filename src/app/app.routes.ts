import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { ForgotemailidComponent } from './forgotgmailid/forgotemailid.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EmailaddressComponent } from './emailaddress/emailaddress.component';
import { AddemailmodalComponent } from './addemailmodal/addemailmodal.component';
import { OtpEmailComponent } from './otp-email/otp-email.component';
import { VerifyemailmodalComponent } from './verifyemailmodal/verifyemailmodal.component';
import { AddMobileModalComponent } from './add-mobile-modal/add-mobile-modal.component';
import {MobileNumbersComponent } from './mobile-numbers/mobile-numbers.component';
import { VerifymobilenumberComponent } from './verifymobilenumber/verifymobilenumber.component';
import { SecurityComponent } from './security/security.component';
import { PasswordComponent } from './password/password.component';
import { DevicesignInsComponent } from './devicesign-ins/devicesign-ins.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SettingsPreferencesComponent } from './settings-preferences/settings-preferences.component';
import { SettingsLinkedaccountComponent } from './settings-linkedaccount/settings-linkedaccount.component';
import { SettingsCloseaccountComponent } from './settings-closeaccount/settings-closeaccount.component';
import { SettingsAuthorizedwebsitesComponent } from './settings-authorizedwebsites/settings-authorizedwebsites.component';
import { Closeaccount2Component } from './closeaccount2/closeaccount2.component';
import { TopbarComponent } from './topbar/topbar.component';
import { Topbar1Component } from './topbar1/topbar1.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ResetPasswordComponent } from './resetpassword/resetpassword.component';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'forgotemailid', component: ForgotemailidComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'emailaddress', component: EmailaddressComponent },
   { path: 'addemailmodal', component: AddemailmodalComponent },   
   { path: 'OtpEmailComponent', component: OtpEmailComponent}  ,
   { path: 'verifyemailmodal', component: VerifyemailmodalComponent },


  { path: 'addmobilemodal', component:AddMobileModalComponent},
  { path: 'mobile-numbers', component:MobileNumbersComponent},
  { path: 'verify-mobile', component: VerifymobilenumberComponent},
  { path:'security',component:SecurityComponent},
  { path:'Password',component:PasswordComponent},
  {path:'device-signins',component:DevicesignInsComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'settings-authorizedwebsites',component:SettingsAuthorizedwebsitesComponent},
  {path:'settings-closeaccount',component:SettingsCloseaccountComponent},
  {path:'settings-linkedaccount',component:SettingsLinkedaccountComponent},
  {path:'settings-preferences',component:SettingsPreferencesComponent},
  {path:'closeaccount2',component:Closeaccount2Component},
  {path:'topbar',component:TopbarComponent},
    {path:'topbar1', component: Topbar1Component},
{ path: 'verify-otp', component: VerifyOtpComponent },

{path:'resetpassword',component:ResetPasswordComponent},
{ path: '', redirectTo: '/profile', pathMatch: 'full' },

];
