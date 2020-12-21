import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** compoents */
import { HomeComponent } from './body/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
   
  ]},
  {
    path: 'collaborateurs',
    loadChildren: () => import('../team/team.module')
      .then(mod => mod.TeamModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
