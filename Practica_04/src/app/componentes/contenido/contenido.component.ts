import { Component, OnInit } from '@angular/core';
import { ComentariosService } from 'src/app/servicios/comentarios.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  public listaDatos;

  constructor(private comentarioService: ComentariosService) { }

  ngOnInit(): void {
    this.getListaComentarios();
  }

  getListaComentarios(){
    this.comentarioService.getComentarios().subscribe((res: Comment[]) => {
      this.listaDatos = res;
    })
  }
}
