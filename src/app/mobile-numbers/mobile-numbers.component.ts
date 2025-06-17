import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMobileModalComponent } from '../add-mobile-modal/add-mobile-modal.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-mobile-numbers',
  templateUrl: './mobile-numbers.component.html',
  styleUrls: ['./mobile-numbers.component.css'],
   standalone: true,
  imports: [CommonModule, SidebarComponent,RouterModule],
})
export class MobileNumbersComponent {
  mobileNumbers = ['+91 789******8'];

  // constructor(public dialog: MatDialog) {}

  // openAddMobileDialog() {
  //   const dialogRef = this.dialog.open(AddMobileModalComponent, {
  //     width: '400px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.mobileNumbers.push(result);
  //     }
  //   });
  // }
  constructor(private router: Router) {}


   onAddMobileNumber() {
    this.router.navigate(['/addmobilemodal']);
    
    // Future: Show input field or modal
    
  }
}
