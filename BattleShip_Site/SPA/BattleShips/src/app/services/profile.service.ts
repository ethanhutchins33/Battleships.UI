import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, throwError } from 'rxjs';
import { ProfileType } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
    ) { }

  getApiProfileData(): Observable<ProfileType>{
    console.log("Trying to get profile...");
    return this.http.get<ProfileType>("https://localhost:7238/api/profile");
  }
}
