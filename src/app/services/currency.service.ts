import { catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment.prod';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http:HttpClient) { }

  public getCurrency():Observable<any>{
    const header = new HttpHeaders({ 'ContentType': 'application/json' });
    const url = environment.api + `currency`;
    return this.http.get(url, { headers: header })
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
