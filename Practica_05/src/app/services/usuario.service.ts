import { Usuario } from '../interface/usuario';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public infoUsuario = new BehaviorSubject<Usuario>(null);
  public $infoUsuario = this.infoUsuario.asObservable();

  constructor() { }

  addUser(usuario: Usuario){
    return this.infoUsuario.next(usuario);
  }

  getInfoUsuario(): Usuario {
    let usuarioData;
    this.infoUsuario.subscribe((user: Usuario) => {
      usuarioData = user;
    })
    return usuarioData;
  }
}
