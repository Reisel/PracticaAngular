import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-externo2',
  templateUrl: './externo2.component.html',
  styleUrls: ['./externo2.component.css']
})
export class Externo2Component implements OnInit {
  @Input() titulo: string;
  @Input() datos = {};
  /* @Output() contador = new EventEmitter(); */
  @Output() contador: EventEmitter<number> = new EventEmitter<number>();
  public conteo: number = 0;
  
  constructor() {}

  ngOnInit(): void {

  }

  aumentarConteo(){
    this.conteo++;
    this.contador.emit(this.conteo);
  } 
}
