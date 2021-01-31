import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BandejaRoutingModule } from './bandeja-routing.module';

import { BandejaComponent } from './bandeja.component';
import { PrincipalComponent } from './principal/principal.component';
import { OpcionesComponent } from './opciones/opciones.component';



@NgModule({
  declarations: [BandejaComponent, PrincipalComponent, OpcionesComponent],
  imports: [
    CommonModule,
    BandejaRoutingModule,
    ModalModule.forRoot()
  ]
})
export class BandejaModule { }
