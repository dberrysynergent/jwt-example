import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  adminURL = environment.apiBaseURL + environment.adminURL;

  constructor(private http: HttpClient) { }

  getSecretInfo(currentUser: User) {
    return this.http.get(this.adminURL, {responseType: 'text'});
  }

}
