import { Component, OnInit } from '@angular/core';

/** rxjs */
import { Subscription } from 'rxjs';

/** model */
import { UserInformations } from '../../models/user_informations.interface';

/** services */
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-menu-team',
  templateUrl: './menu-team.component.html',
  styleUrls: ['./menu-team.component.scss']
})
export class MenuTeamComponent implements OnInit {

  isConnectSubscription: Subscription;
  constructor( private teamService: TeamService) { }

  ngOnInit(): void {
    this.isConnectSubscription = this.teamService.setUserConnect.subscribe(
      (data: UserInformations) => {
        console.log(data)
      }
    )
  }

}
