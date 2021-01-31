import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public isCollapsed: boolean = true;

  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm (){
    this.form = this.fb.group({
      usuario: ["", Validators.required],
      contraseña: ["", Validators.required],
    });
  }

  addUser(){
    console.log(1);
    if(this.form.valid){
      this.usuarioService.addUser(this.form.value);
      this.router.navigate(['bandeja']);
    }
  }

}
