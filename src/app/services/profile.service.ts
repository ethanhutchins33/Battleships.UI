import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError as handleError, tap, throwError } from 'rxjs';
import { Profile } from '../models/profile.model';
import { environment } from '../../environments/environment';
//import { BrowserUtils } from '@azure/msal-browser';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(user: Profile): Observable<Profile> {
    console.log('Trying to get profile...');
    return this.http
      .get<Profile>(`${environment.BattleShipsUsersApiUrl}/api/profile`)
      .pipe(handleError(this.handleError('getUserProfile', user)));
  }

  addUserProfile(user: Profile): Observable<Profile> {
    console.log('Adding new user to the DB...');
    return this.http
      .post<Profile>(`${environment.BattleShipsUsersApiUrl}/api/profile`, user)
      .pipe(handleError(this.handleError('addUserProfile', user)));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
