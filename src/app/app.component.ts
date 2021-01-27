import { Component, OnChanges, OnInit } from '@angular/core';

import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  pageTitle: string;
  currentUsername: string;

  constructor(private authService: AuthenticationService) { 
    this.pageTitle = 'Pick-or-Post'
    this.currentUsername = '';
  }
  
  ngOnInit(): void {
    this.authService.getCurrentUser()
    .subscribe(user => {
      if (user) {
        this.currentUsername = JSON.parse(user).username;
      }
      else {
        this.currentUsername ='';
      }
    });  
  }
  
  signOut(): void {
    this.authService.removeCurrentUser();
  }
}
