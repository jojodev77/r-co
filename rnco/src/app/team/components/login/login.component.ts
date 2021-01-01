import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

/** services */
import { TeamFormulaireService } from '../../services/team-formulaire.service';

/** Models */
import { Login } from '../../models/login.interface';
import { UserInformations } from '../../models/user_informations.interface';
import { TeamService } from '../../services/team.service';

import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private teamFormulaireService: TeamFormulaireService,
    private teamService: TeamService,
    private router: Router,
    private route: ActivatedRoute) { }

  teamForm: FormGroup;
  login: Login;
  userInformation: UserInformations;
  isConnectSubscription: Subscription;

  ngOnInit(): void {
    this.teamForm = this.teamFormulaireService.buildForm();
  }

  createUser() {

  }

  validConnexion() {
    this.login = {
      email: this.teamForm.get('email').value,
      password: this.teamForm.get('password').value
    } as Login;
    if (this.login) {
      this.teamService.connexion(this.login).subscribe(
        (data: UserInformations) => {
          this.userInformation = data;
          console.log(this.userInformation)
          sessionStorage.setItem('userConnectRNCO', this.userInformation.jwtToken)
          this.teamService.setUserConnect.next(this.userInformation)

          this.isConnectSubscription = this.teamService.setUserConnect.subscribe(
            (data: UserInformations) => {
              console.log(data)
            }
          )
          if (this.userInformation) {
            this.router.navigate(['collaborateurs/menu_collaborateurs'])
          } else {
            this.router.navigate(['/'])
          }
        }
      );
    }

  }

  passwordForget() {

  }

}
