import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  public contenido_rutas: string = "Formularios Reactivos";

  constructor() { }

  ngOnInit(): void {
  }
}
