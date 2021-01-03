import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Informations } from '../models/informations.interface';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient) { }
  env = environment;

  createInformations(informations: Informations): Observable<Informations> {
    return this.http.post<Informations>(this.env.createInformationsUrl, informations)
  }

  getAllInformations(): Observable<Informations[]> {
    return this.http.get<Informations[]>(this.env.getAllInformationsUrl)
  }

  deleteInformation(info: Informations): Observable<Informations> {
return this.http.post<Informations>(this.env.deleteInformationsUrl, info)
  }
}
