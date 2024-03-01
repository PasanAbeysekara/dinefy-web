import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService, private router: Router
   ) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/profile']);
    this.loginService.setIsLogged(true);
  }

}
