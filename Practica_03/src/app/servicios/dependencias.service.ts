import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependenciasService {
  public muestra1: string [];
  public ejercicio: any[] = [];
  
  constructor() { }

  dependencias1(){
    this.muestra1 = ["Test 1","Test 2","Test 3"];
    console.log(this.muestra1);
  }

  desarrollo(){
     const array = [1,2,3,4,5,6,7,8];
     this.ejercicio.push(array);
  }
}
