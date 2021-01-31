import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Router } from "@angular/router";

import { Usuario } from 'src/app/interface/usuario';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-bandeja',
  templateUrl: './bandeja.component.html',
  styleUrls: ['./bandeja.component.css']
})
export class BandejaComponent implements OnInit {
  public nombreUsuario: String;
  public modalRef: BsModalRef;
  public user: Usuario = {
    contraseña: "",
    usuario: ""
  }

  constructor(
    private usuarioService: UsuarioService,
    private modalService: BsModalService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(){
    this.nombreUsuario = this.usuarioService.getInfoUsuario().usuario;
  }

  openModal(template: TemplateRef<any>){
    //Borrar Usuario
    this.usuarioService.infoUsuario.next(this.user);
    //Desplegar modal
    this.modalRef = this.modalService.show(template);
    // Rutear a pagina de inicio
    this.router.navigate([""]);
  }
}
