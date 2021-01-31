import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandejaComponent } from "./bandeja.component";
import { OpcionesComponent } from './opciones/opciones.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path: '',
  component: BandejaComponent,
  children: [
    {path: 'principal', component: PrincipalComponent},
    {path: 'opciones', component: OpcionesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BandejaRoutingModule {

}
