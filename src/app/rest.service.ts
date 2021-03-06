import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getOrders(): Observable<any> {
    return this.http.get(endpoint + 'orders').pipe(
      map(this.extractData));
  }

  getOrder(id): Observable<any> {
    return this.http.get(endpoint + 'orders/' + id).pipe(
      map(this.extractData));
  }

  cancelOrder(id): Observable<any>{
    return this.http.post(endpoint +'orders/'+id+'/cancel', {}).pipe();
  }

  addOrder (order): Observable<any> {
    console.log(order);
    return this.http.post<any>(endpoint + 'orders', JSON.stringify(order), httpOptions).pipe(
      tap((order) => console.log(`added order w/ id=${order.id}`)),
      catchError(this.handleError<any>('addOrder'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
