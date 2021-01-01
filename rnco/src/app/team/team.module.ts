import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** components */
import { BlogValidationComponent } from './components/blog-validation/blog-validation.component';
import { LoginComponent } from './components/login/login.component';
import { AddInformationComponent } from './components/add-information/add-information.component';
import { TeamInformationComponent } from './components/team-information/team-information.component';
import { GestionTeamComponent } from './components/gestion-team/gestion-team.component';
import { HomeTeamComponent } from './components/home-team/home-team.component';
import { MenuTeamComponent } from './components/menu-team/menu-team.component';

/** Module */
import { SharedModule } from '../shared/shared.module';
import { TeamRoutingModule } from './team.module.routing';
import { ReactiveFormsModule } from '@angular/forms';

/** service */
import { TeamFormulaireService } from './services/team-formulaire.service';
import { TeamService } from './services/team.service';
import { BlogFormulaireService } from './services/blog-formulaire.service';
import { BlogService } from './services/blog.service';
import { CommentService } from './services/comment.service';
import { InformationFormulaireService } from './services/information-formulaire.service';
import { InformationService } from './services/information.service';




@NgModule({
  declarations: [BlogValidationComponent, LoginComponent, AddInformationComponent, TeamInformationComponent, GestionTeamComponent, HomeTeamComponent, MenuTeamComponent],
  imports: [
    CommonModule,
    SharedModule,
    TeamRoutingModule
  ],
  providers: [
    TeamFormulaireService,
    TeamService,
    BlogFormulaireService,
    CommentService,
    InformationFormulaireService,
    InformationService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeamModule { }
