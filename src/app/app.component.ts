import { Component, EventEmitter } from '@angular/core';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userauthfrontend';
  authenticatedUser: User = JSON.parse(localStorage.getItem('currentUser'));;

  loginEvent() {
    this.authenticatedUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  logout() {
    console.log('logged out');
    this.authenticatedUser = null;
    localStorage.removeItem('currentUser');
  }
}
