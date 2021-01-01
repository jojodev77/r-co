import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core.module.routing';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './body/home/home.component';
import { IdenditeComponent } from './body/idendite/idendite.component';
import { AccueilComponent } from './body/accueil/accueil.component';
import { PartenairesComponent } from './body/partenaires/partenaires.component';
import { ProduitsComponent } from './body/produits/produits.component';
import { ConfortComponent } from './body/confort/confort.component';
import { ContactComponent } from './body/contact/contact.component';
import { AgrementComponent } from './body/agrement/agrement.component';
import { SimulateurService } from './body/services/simulateur.service';
import { FriseTemporelComponent } from './body/frise-temporel/frise-temporel.component';
import { FaqComponent } from './body/faq/faq.component';
import { LivreOrComponent } from './body/livre-or/livre-or.component';
import { RecommandationsComponent } from './body/recommandations/recommandations.component';
import { CollaborateurComponent } from './body/collaborateur/collaborateur.component';
import { CommentService } from '../team/services/comment.service';
import { PagerService } from './body/services/pagination-service';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, IdenditeComponent, AccueilComponent, PartenairesComponent, ProduitsComponent, ConfortComponent, ContactComponent, AgrementComponent, FriseTemporelComponent, FaqComponent, LivreOrComponent, RecommandationsComponent, CollaborateurComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule

  ],
  exports: [
LivreOrComponent
  ],
  providers: [SimulateurService, CommentService, PagerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CoreModule { }
