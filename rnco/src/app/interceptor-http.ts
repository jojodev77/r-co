import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { UserInformations } from './team/models/user_informations.interface';
import { TeamService } from './team/services/team.service';


@Injectable()
export class  HttpConfigInterceptor implements HttpInterceptor {
  constructor( private teamService: TeamService, private router: Router) {}
  userInformation: UserInformations;
  token:string;
  tokenSubscription:Subscription;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string = sessionStorage.getItem('userConnectRNCO');
   
    if (token) {
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log('event--->>>', event.status);
                if (event.status == 401) {
                    this.router.navigate(['/'])
                }
                if (event.status == 503) {
                    this.router.navigate(['/'])
                }
            }
            return event;
        }));
}
}