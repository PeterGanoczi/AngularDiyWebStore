import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'src/entities/user';
import { SnackbarService } from './snackbar.service';


const API_URL='http://localhost:8080/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient, private snackBarService: SnackbarService) { }

  registerUser(user): Observable<any> {
    return this.http.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
 

  loginUser(user: {username:any, password:any}): Observable<any>{
    return this.http.post(API_URL+'login', {
      username: user.username,
      password: user.password,
    }, httpOptions);
  }
  
  processHttpError(error): Observable<never> {
    console.log(error);

    if (error instanceof HttpErrorResponse) {
        if (error.status === 0) {
            // this.messageService.sendMessage('Server unavailable');
            console.log("Server unavailable")
        } else {
            if (error.status >= 400 && error.status < 500) {
                const message = error.error.error
                    ? error.error.error
                    : JSON.parse(error.error).error;
                //   const message = error.error.error ?? JSON.parse(error.error).error;
                console.log(message);
                
                this.snackBarService.errorMessage(message);

                // this.messageService.sendMessage(message);
            } else {
                this.snackBarService.errorMessage('Server error: ' + error.message);
                console.log("Server error:"+error.message);
            }
        }
    } else {
        console.log('Server error ' + error);
        console.log(error);

        this.snackBarService.errorMessage('Client error : ' + JSON.stringify(error));
        
    }
    console.error('Server error: ', error);
    return EMPTY;
}

}

