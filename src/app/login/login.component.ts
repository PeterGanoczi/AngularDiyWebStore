import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { SnackbarService } from 'src/services/snackbar.service';
import { TokenStorageService } from 'src/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private snackBarService: SnackbarService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.authService.loginUser(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.snackBarService.successMessage("Login successful");
        this.reloadPage();
               
        

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log(this.errorMessage);
        this.snackBarService.errorMessage("Bad credentials!")
      }
    );
    
  }

  reloadPage(): void {
    window.location.reload();
  }

}