import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }


  public addPaymentDetails(amount:number, currencyCode: string, destinationAccountNumber:number, paymentDescription: string,sourceAccountNumber:number): Observable<any> {
    const header = new HttpHeaders({ 'ContentType': 'application/json' });
    const url = environment.api + 'payment/add';
    return this.http.post(url, { amount, currencyCode, destinationAccountNumber, paymentDescription,sourceAccountNumber }, { headers: header })
      .pipe(
        catchError(this.handleError)
      );
  }
  public getAllPayments():Observable<any>{
    const header = new HttpHeaders({ 'ContentType': 'application/json' });
    const url = environment.api + `payment`;
    return this.http.get(url, { headers: header })
      .pipe(
        catchError(this.handleError)
      );
  }

  public getPaymentById(id: string): Observable<any> {
    const header = new HttpHeaders({ 'ContentType': 'application/json' });
    const url = environment.api + `payment/${id}`;
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
