import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, throwError } from 'rxjs';
import { Profile } from '../models/profile.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
    ) { }

  profile(id: string): Observable<Profile>{
    console.log("Trying to get profile...");
    return this.http.get<Profile>(`${environment.backendApiUrl}/api/profiles/${id}`);
  }

}
