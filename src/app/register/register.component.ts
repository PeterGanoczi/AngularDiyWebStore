import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { AuthService } from 'src/services/auth.service';
import { SnackbarService } from 'src/services/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private snackBarService: SnackbarService) {
  }
  

  ngOnInit(): void {
  }

  onSubmit(): void {
      this.authService.registerUser(this.form).subscribe(
          data => {
              console.log(data);
              this.isSuccessful = true;
              this.isSignUpFailed = false;
             
              window.location.replace("/login");
              this.snackBarService.successMessage(data.message);
          },
          err => {
            
              this.errorMessage = err.error.message;
              this.isSignUpFailed = true;
              this.snackBarService.errorMessage(this.errorMessage);

          }
      );
  }
}
