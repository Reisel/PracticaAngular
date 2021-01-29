import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComentariosService } from 'src/app/servicios/comentarios.service';

@Component({
  selector: 'app-add-comentario',
  templateUrl: './add-comentario.component.html',
  styleUrls: ['./add-comentario.component.css']
})
export class AddComentarioComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private comentariosService: ComentariosService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      id: [""],
      titulo: ["", Validators.required],
      likes: [null, Validators.required],
      comentarios: ["", Validators.required]
    });
  }

  addComentario(){
    if(!this.form.valid){
      alert("Faltan campos requeridos");
      return;
    } else {      
      this.comentariosService.addComentario(this.form.value).subscribe((res: Comment) => {
        window.location.reload();
        alert("Comentario Creado");
      }, error => {
        alert("Error");
      });
    }
  }
}
