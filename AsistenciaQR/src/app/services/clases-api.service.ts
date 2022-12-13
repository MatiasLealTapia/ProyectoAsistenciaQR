import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasesApiService {

  httpOptions = {
    headers: new HttpHeaders
      ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
  } // Se establece la base url del API a consumir
  apiURL = 'https://my-json-server.typicode.com/MatiasLealTapia/ionicApiRestProyectoQR/clases';

  constructor(public http: HttpClient) { }

  getClase(clase):Observable<any>{
    return this.http.get(this.apiURL).pipe(
      retry(1)
    );
  }
  getClases():Observable<any>{
    return this.http.get(this.apiURL).pipe(
      retry(1)
    );
  }
}
