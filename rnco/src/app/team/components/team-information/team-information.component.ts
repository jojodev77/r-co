import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/** models */
import { UserInformations } from '../../models/user_informations.interface';
/** services */
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-information',
  templateUrl: './team-information.component.html',
  styleUrls: ['./team-information.component.scss']
})
export class TeamInformationComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  

  ngOnInit(): void {
   
  }


}
