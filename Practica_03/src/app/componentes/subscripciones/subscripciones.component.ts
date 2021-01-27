import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubcripcionesService } from 'src/app/servicios/subcripciones.service';

@Component({
  selector: 'app-subscripciones',
  templateUrl: './subscripciones.component.html',
  styleUrls: ['./subscripciones.component.css']
})
export class SubscripcionesComponent implements OnInit, OnDestroy {
  public subscripciones: Subscription;

  constructor(private subsService: SubcripcionesService) { }

  ngOnInit(): void {
    this.subsService.getObservables();
    this.getArrayObs();
  }

  getArrayObs(){
    this.subsService.getNewObservable().subscribe(respuesta => {
      console.log(respuesta);
    })
  }

  ngOnDestroy(){
  this.subscripciones.unsubscribe();
  }

}
