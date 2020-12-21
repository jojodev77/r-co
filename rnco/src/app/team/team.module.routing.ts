import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionTeamComponent } from './components/gestion-team/gestion-team.component';
import { HomeTeamComponent } from './components/home-team/home-team.component';

/** components */
import { LoginComponent } from './components/login/login.component';
import { MenuTeamComponent } from './components/menu-team/menu-team.component';
import { TeamInformationComponent } from './components/team-information/team-information.component';


const routes: Routes = [
  {path: '', component: HomeTeamComponent, children: [
    {path: '', component: LoginComponent},
  {path: 'information_equipe', component: TeamInformationComponent},
  {path: 'menu_collaborateurs', component: MenuTeamComponent},
  {path: 'gestion_equipe', component: GestionTeamComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
