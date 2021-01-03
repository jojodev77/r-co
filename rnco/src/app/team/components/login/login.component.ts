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
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) { }

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
          sessionStorage.setItem('userConnectRNCO', this.userInformation.jwtToken);
          sessionStorage.setItem('name', this.userInformation.firstName);
          this.teamService.setUserConnect.next(this.userInformation)
          this.isConnectSubscription = this.teamService.setUserConnect.subscribe(
            (data: UserInformations) => {
              
            }
          ), (err) => {
            if (err.status === 401) {
              this.openSnackBar('Session expiré', '')
              this.router.navigateByUrl('/login');
            }
          }
          if (this.userInformation) {
            this.openSnackBar('Bonjour', '')
            this.router.navigate(['collaborateurs/menu_collaborateurs'])
          } else {
            this.openSnackBar('Nom et/ou mdp incorrect', '')
            this.router.navigate(['/'])
          }
        }
      );
    }

  }

  passwordForget() {

  }

  
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 3000,
    panelClass: ['warning']
  });
}

}
