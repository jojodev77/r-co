import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

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
  constructor( private teamService: TeamService, private router: Router) { 
  }
  userInformation: UserInformations;

  ngOnInit(): void {
    this.isConnectSubscription = this.teamService.setUserConnect.subscribe(
      (data: UserInformations) => {
      }
    )
    let token = sessionStorage.getItem('userConnectRNCO');
   if (!token) {
     this.router.navigate(['/login'])
   }

   setTimeout(() => {
    let token = sessionStorage.getItem('userConnectRNCO');
    if (!token) {
      this.router.navigate(['/login'])
    }
   }, 50000);
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log(tabChangeEvent.tab.textLabel);
}

}
