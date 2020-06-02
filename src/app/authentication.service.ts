import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authURL: string = environment.apiBaseURL + environment.authURL;

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
    return this.http.post<User>(this.authURL, {username, password});
  }
}
