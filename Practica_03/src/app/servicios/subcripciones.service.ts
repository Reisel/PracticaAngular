import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcripcionesService {

  constructor() { }

  getObservables(){
    const observable = new Observable((subscriptor) => {
      subscriptor.next(1);
      subscriptor.next(2);
      subscriptor.next(3);

      setTimeout(() => {
        subscriptor.next(4);
      }, 2000);
    });
    
    console.log("Antes de la subscripción");

    observable.subscribe({
      next(x) {console.log("Valor: ", x)},
      error (err) {console.log("Upps, paso algo", err)},
      complete() {console.log("Terminado")}
    });

    console.log("Despues de la subscripcion");
  }

  getNewObservable(): Observable<number[]> {
    const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return of(valores);
  }
}
