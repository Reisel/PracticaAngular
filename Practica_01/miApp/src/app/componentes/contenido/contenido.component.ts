import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  titulo: string ="Interpolacion";
  titulo2: string ="Dos";
  isActive: boolean = false;
  nombre: string = "juan";
  edad: number = 22;
  sueldos: string[] = ["97000", "13000", "20000"];
  objetoCSS: object = {color:"yellow"};
  miForm: FormGroup;

  public ejercicio = [
    {
      nombre: "Juan X",
      cargo: "Developer",
      sueldo: "1800",
      ingreso: "Friday, April 15, 2016",
    },
    {
      nombre: "Pedro X",
      cargo: "CTO",
      sueldo: "3900",
      ingreso: "Monday, march 14, 2007",
    },
    {
      nombre: "Diana X",
      cargo: "Developer Jr",
      sueldo: "700",
      ingreso: "Tuesday, August 31, 2018",
    }
  ]
  constructor(private form: FormBuilder) {}

  ngOnInit(): void {
    this.miForm = this.form.group({
      nombre: new FormControl("",[
        Validators.required,
        Validators.minLength(8)])
    });
  }

  cambiar(){
    this.titulo = "Cambio!!";
    this.titulo2 = "2";
    this.isActive = false;
  }

  cambiar2(){
    this.titulo2 = "Dos";
    this.isActive = true;
  }

  estaActivo(): boolean{
    return this.isActive
  }

  hijoPadre(){
    console.log(3);
  }

  enviar(){
    console.log(this.miForm.value);
    console.log(this.miForm.status);
    console.log(this.miForm.valid);
  }
}
