import { Component, Input, OnInit } from '@angular/core';
import { ComentariosService } from 'src/app/servicios/comentarios.service';

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent implements OnInit {
  @Input() data;

  constructor(private comentariosService: ComentariosService) { }

  ngOnInit(): void {
  }

  verComentario(id:string){
    this.comentariosService.comentarioId.next(id);
  }

  borrarComentario(id: string){
    this.comentariosService.borrarComentario(id).subscribe(res => {
      window.location.reload();
      alert("Comentario Borrado");
    })
    
  }
}
