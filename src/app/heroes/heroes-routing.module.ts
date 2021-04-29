import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';

const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroesComponent },
  { path: 'heroes/besthero', component: HeroesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }