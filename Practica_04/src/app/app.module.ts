import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ListaComentariosComponent } from './componentes/lista-comentarios/lista-comentarios.component';
import { AddComentarioComponent } from './componentes/add-comentario/add-comentario.component';
import { EditarComentarioComponent } from './componentes/editar-comentario/editar-comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    HeaderComponent,
    ListaComentariosComponent,
    AddComentarioComponent,
    EditarComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
