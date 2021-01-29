import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComentariosService } from 'src/app/servicios/comentarios.service';

@Component({
  selector: 'app-editar-comentario',
  templateUrl: './editar-comentario.component.html',
  styleUrls: ['./editar-comentario.component.css']
})
export class EditarComentarioComponent implements OnInit {
  public form: FormGroup;

  constructor(private comentariosService: ComentariosService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.comentariosService.id.subscribe((res: string) => {
        this.comentariosService.getComentarioPorId(res).subscribe((data: Comment) => {
        this.form.patchValue(data); 
      })
    })
  }

  initForm(){
    this.form = this.fb.group({
      id: [""],
      titulo: ["", Validators.required],
      likes: [null, Validators.required],
      comentarios: ["", Validators.required]
    });
  }

  editarComentario(){
    const id = this.form.get("id").value;
    this.comentariosService.actualizarComentario(id,this.form.value).subscribe(res =>{;
      window.location.reload();
      alert("Comentario Editado");
    })
  }

}
