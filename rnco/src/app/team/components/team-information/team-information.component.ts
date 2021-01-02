import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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


@Component({
  selector: 'app-team-information',
  templateUrl: './team-information.component.html',
  styleUrls: ['./team-information.component.scss']
})
export class TeamInformationComponent implements OnInit {

  constructor(
    private teamService: TeamService,
    private informationsService: InformationService,
    private location: Location,
    private router: Router) { }

informations: any;
  

  ngOnInit(): void {
   this.informationsService.getAllInformations().subscribe(
     (data: any)=> {
       this.informations = data.Informations;
     }
   )
   let token = sessionStorage.getItem('userConnectRNCO');
   if (!token) {
     this.router.navigate(['/login'])
     
   }

  }

  pageRefresh() {
    location.reload();
 }

}
