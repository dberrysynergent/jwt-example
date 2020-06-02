import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginEvent = new EventEmitter<any>();
  username: string;
  password: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.username && this.password) {
      this.authService.authenticate(this.username, this.password).subscribe(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.loginEvent.emit();
        this.router.navigate(['./home']);
        console.log('successfully logged in!');
        console.log(user);
      });
    }
  }

}
