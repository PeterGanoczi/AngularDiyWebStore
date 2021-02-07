import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  successMessage(message: string) {
    this.snackbar.open(message, "SUCCESS", {
      panelClass: 'greenSnackbarAction',
      duration: 5000,
      verticalPosition: "top"
    });
  }

  errorMessage(message: string) {
    this.snackbar.open(message, "ERROR", {
      panelClass: 'greenSnackbarAction',
      duration: 5000,
      verticalPosition: "top"
    });
  }
}
