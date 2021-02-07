import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/services/token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn = false;
  username: string | undefined;
  
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    this.tokenStorageService.getUserObservable().subscribe(
      
      data=> {
        this.username=data;
        
      }
    );

    this.isLoggedIn = !!this.tokenStorageService.getToken();
     

    if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();

        this.username = user.username;
       
    }

  
}



logout(): void {
    this.tokenStorageService.signOut();
    window.location.replace('login');
}
}
