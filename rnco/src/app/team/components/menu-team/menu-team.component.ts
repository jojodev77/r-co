import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
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
export class MenuTeamComponent implements OnInit, AfterViewInit, OnDestroy {

  isConnectSubscription: Subscription;
  constructor( private teamService: TeamService, private router: Router) { 
  }
  userInformation: UserInformations;
  name: string;

  ngOnInit(): void {
    this.isConnectSubscription = this.teamService.setUserConnect.subscribe(
      (data: UserInformations) => {
      }
    ), (err) => {
      if (err.status == 401) { this.router.navigateByUrl('/login');
  }
}
    let token = sessionStorage.getItem('userConnectRNCO');
   if (!token) {
     this.router.navigate(['/collaborateurs'])
   }

   setTimeout(() => {
    this.isConnectSubscription = this.teamService.setUserConnect.subscribe(
      (data: UserInformations) => {
      }
    ), (err) => {
      if (err.status == 401) { this.router.navigate(['/collaborateurs']);
  }
}
   }, 50000);

this.name = sessionStorage.getItem('name');
let errorMsg = (+sessionStorage.getItem('errorHttp'));
    if (errorMsg === 401) {
      this.router.navigate(['./collaborateurs'])
    }
  }

  ngAfterViewInit() {
    let token = sessionStorage.getItem('userConnectRNCO');
    if (!token) {
      this.router.navigate(['/collaborateurs'])
    }
 
  }

  ngOnDestroy() {
    this.isConnectSubscription.unsubscribe()
  }

  disconnect() {
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('userConnectRNCO');
    this.router.navigate(['/collaborateurs'])
  }
}
