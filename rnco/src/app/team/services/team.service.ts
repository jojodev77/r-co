import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.interface';
import { UserInformations } from '../models/user_informations.interface';

@Injectable({
  providedIn: 'root'
})


export class TeamService {
  env = environment;
  setUserConnect = new Subject<UserInformations>();

  constructor(private http: HttpClient) { }

  format(url: string, ...values: string[]): string {
    let formattedUrl = url;
    for (const value of values) {
      formattedUrl = formattedUrl.replace('{}', value);
    }
    return formattedUrl;
  }

  createUser(UserInformations: UserInformations): Observable<UserInformations> {
    return this.http.post<UserInformations>(this.env.createUserUrl, UserInformations)
  }

  connexion(login: Login): Observable<UserInformations> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '**',
      'Access-Control-Allow-Headers': '**',
      'Access-Control-Allow-Methods': 'POST, GET, OPTION',
      'Content-Type': 'application/json'
  })
    let requestParams = new HttpParams();
    requestParams = requestParams.append("email", login.email);
   // requestParams = requestParams.append("password", login.password);
    console.log(login)
    return this.http.post<UserInformations>(this.env.getUserConnexionUrl, login)
  }



}
