import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/** models */
import { UserInformations } from '../../models/user_informations.interface';

/** services */
import { TeamService } from '../../services/team.service';
import { TeamFormulaireService } from '../../services/team-formulaire.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gestion-team',
  templateUrl: './gestion-team.component.html',
  styleUrls: ['./gestion-team.component.scss']
})
export class GestionTeamComponent implements OnInit, AfterViewInit {

  constructor(
    private teamService: TeamService,
    private teamFormulaireService: TeamFormulaireService
    ) { }

  teams: UserInformations[];
  displayedColumns: string[] = ['name', 'roles', 'email', 'password', 'status'];
  dataSource = new MatTableDataSource<UserInformations>();
  @ViewChild(MatSort) sort: MatSort;
  createTeamsForm: FormGroup;

  ngOnInit(): void {
    this.teamService.getAllUser().subscribe(
      (data: any) => {
        this.teams = data.user;
        this.dataSource.data = this.teams;
      }
    )
    this.createTeamsForm = this.teamFormulaireService.buildForm();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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
      status: this.createTeamsForm.get('createStatus').value,
    } as UserInformations;
console.log(newUserTeam)
    this.teamService.createUser(newUserTeam);
  }

}

