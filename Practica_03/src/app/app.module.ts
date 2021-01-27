import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormComponent } from './componentes/form/form.component';
import { DependenciasComponent } from './componentes/dependencias/dependencias.component';
import { SubscripcionesComponent } from './componentes/subscripciones/subscripciones.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    HeaderComponent,
    FormComponent,
    DependenciasComponent,
    SubscripcionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
