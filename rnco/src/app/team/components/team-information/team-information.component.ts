import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/** models */
import { UserInformations } from '../../models/user_informations.interface';

/** services */
import { TeamService } from '../../services/team.service';
import { InformationService } from '../../services/information.service';
import { Informations } from '../../models/informations.interface';
import { Router } from '@angular/router';
import { pipe, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-team-information',
  templateUrl: './team-information.component.html',
  styleUrls: ['./team-information.component.scss']
})
export class TeamInformationComponent implements OnInit, OnDestroy {

  constructor(
    private teamService: TeamService,
    private informationsService: InformationService,
    private location: Location,
    private router: Router) { }

informations: any;
informationSubscription: Subscription;
roles: string;

  ngOnInit(): void {
 this.initialInformation();
 this.roles = sessionStorage.getItem('roles');
  }

  ngOnDestroy() {
    this.informationSubscription.unsubscribe();
  }

  initialInformation() {
    let errorMsg = (+sessionStorage.getItem('errorHttp'));
    if (errorMsg === 401) {
      this.router.navigate(['./collaborateurs'])
    }
    this.informationSubscription =  this.informationsService.getAllInformations().subscribe(
      (data: any)=> {
        this.informations = data.Informations;
      }
    )
    let token = sessionStorage.getItem('userConnectRNCO');
    if (!token) {
      this.router.navigate(['/'])
      
    }
  }

  deleteInformations(information: Informations) {
    if (information) {
      this.informationsService.deleteInformation(information).subscribe(
        (data: any) => {

        }
      );
      this.initialInformation();
      this.router.navigate(['/collaborateurs/menu_collaborateurs'])
    }

  }


}
