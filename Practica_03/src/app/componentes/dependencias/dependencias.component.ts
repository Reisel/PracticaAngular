import { Component, OnInit } from '@angular/core';
import { DependenciasService } from '../../servicios/dependencias.service';


@Component({
  selector: 'app-dependencias',
  templateUrl: './dependencias.component.html',
  styleUrls: ['./dependencias.component.css']
})
export class DependenciasComponent implements OnInit {
  public dataProp: any = [];

  constructor(private dependenciasService: DependenciasService) { }

  ngOnInit(): void {
    this.dependenciasService.dependencias1();
  }

  traerDatos(){
    this.dependenciasService.desarrollo();
    this.dataProp = this.dependenciasService.ejercicio;
  }

}
