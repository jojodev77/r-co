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
import { Subscription } from 'rxjs';


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
          console.log(data)
        }
      );
      this.initialInformation();
      this.router.navigate(['/collaborateurs/menu_collaborateurs'])
    }

  }


}
