import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';

// Directiva Personalizada
import {MiDirectivaDirective} from './directivas/mi-directiva.directive';
import { Externo2Component } from './componentes/externo2/externo2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenidoComponent,
    MiDirectivaDirective,
    Externo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
