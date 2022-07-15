import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, throwError } from 'rxjs';
import { ProfileType } from '../models/profile.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
    ) { }

  profile(id: number): Observable<ProfileType>{
    console.log("Trying to get profile...");
    return this.http.get<ProfileType>(`${environment.backendApiUrl}/api/profiles/${id}`);
  }


}
