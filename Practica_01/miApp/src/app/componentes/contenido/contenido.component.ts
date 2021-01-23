import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  public titulo1: string ="Card 1";
  public titulo2: string ="Nuevo Titulo";
  public activo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  metodo1(){
    this.titulo2 = "Nuevo Titulo 2"
  }

  metodo2(){
    this.activo = true;
  }

}
