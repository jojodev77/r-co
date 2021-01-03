import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/** models */
import { UserInformations } from '../../models/user_informations.interface';

/** services */
import { TeamService } from '../../services/team.service';
import { TeamFormulaireService } from '../../services/team-formulaire.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gestion-team',
  templateUrl: './gestion-team.component.html',
  styleUrls: ['./gestion-team.component.scss']
})
export class GestionTeamComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private teamService: TeamService,
    private teamFormulaireService: TeamFormulaireService,
    private router: Router
  ) { }

  teams: UserInformations[];
  displayedColumns: string[] = ['name', 'roles', 'email', 'password', 'status','delete'];
  dataSource = new MatTableDataSource<UserInformations>();
  @ViewChild(MatSort) sort: MatSort;
  createTeamsForm: FormGroup;
  teamSubscription: Subscription;

  ngOnInit(): void {
    this.initialValueTeam();
    this.createTeamsForm = this.teamFormulaireService.buildForm();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.teamSubscription.unsubscribe()
  }

  initialValueTeam() {
    this.teamSubscription = this.teamService.getAllUser().subscribe(
      (data: any) => {
        this.teams = data.user;
        this.dataSource.data = this.teams;
      }
    ), (err) => {
      if (err.status == 401) {
        this.router.navigateByUrl('/login');
      }
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  saveNewTeamUser() {
    let newUserTeam = {
      firstName: this.createTeamsForm.get('createfirstName').value,
      lastName: this.createTeamsForm.get('createLastName').value,
      email: this.createTeamsForm.get('createEmail').value,
      password: this.createTeamsForm.get('createPassword').value,
      status: true,
      roles: this.createTeamsForm.get('createRoles').value
    } as UserInformations;
    this.teamService.createUser(newUserTeam).subscribe(
      (data: any) => {
      }
    )
    this. initialValueTeam()
    this.router.navigate(['./collaborateurs/menu_collaborateurs'])
  }

  deleteUser(user: UserInformations) {
    if (user) {
      console.log(user)
      this.teamService.deleteUser(user).subscribe(
        (data: any) => {console.log(data)}
      );
      this. initialValueTeam()
      this.router.navigate(['./collaborateurs/menu_collaborateurs'])
    }
  }

}

