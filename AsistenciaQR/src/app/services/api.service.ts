import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders
      ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
  } // Se establece la base url del API a consumir
  apiURL = 'http://10.20.17.196:3000';

  constructor(private http: HttpClient) { }


  getUsuario(username):Observable<any>{
    return this.http.get(this.apiURL+'/users?username='+username).pipe(
      retry(3)
    );
  }
  getUsuarios():Observable<any>{
    return this.http.get(this.apiURL+'/users/').pipe(
      retry(3)
    );
  }
}
