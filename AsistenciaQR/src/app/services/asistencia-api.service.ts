import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClasesApiService } from './clases-api.service';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaApiService {

  httpOptions = {
    headers: new HttpHeaders
      ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
  } // Se establece la base url del API a consumir
  apiURL = 'https://matiaslealtapia.github.io/ionicApiRestProyectoQR/asistencia.json';

  constructor(public http: HttpClient) { }

  getAsistencias():Observable<any>{
    return this.http.get(this.apiURL).pipe(
      retry(1)
    );
  }

}
