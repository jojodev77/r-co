import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Informations } from '../models/informations.interface';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient, private router: Router) { }
  env = environment;

  createInformations(informations: Informations): Observable<Informations> {
    return this.http.post<Informations>(this.env.createInformationsUrl, informations)
  }

  getAllInformations(): Observable<Informations[]> {
    return this.http.get<Informations[]>(this.env.getAllInformationsUrl).pipe(
      retry(1),
      catchError(this.handleError)
  );
  }

  deleteInformation(info: Informations): Observable<Informations> {
return this.http.post<Informations>(this.env.deleteInformationsUrl, info)
  }

  handleError(error) {
    let errorMessage;
    if (error instanceof HttpResponse) {
        // client-side error
        errorMessage = `Error: ${error.status}`;
    } else {
        // server-side error
        errorMessage =  error.status;
    }
    sessionStorage.setItem('errorHttp', errorMessage);
    return throwError(errorMessage);
}
}
