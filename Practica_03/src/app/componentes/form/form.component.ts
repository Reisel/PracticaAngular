import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  /* public form: FormGroup; */
  /* public arrayForm: FormArray; */
 
  form = this.fb.group({
    nombre: ["", Validators.minLength(7)],
    email: ["", Validators.email],
    arrayForm: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    /* this.iniciarForm(); */
  }

/*   iniciarForm(){
    this.form = this.fb.group({
       arrayForm: this.fb.array([this.crearItem()]),
    arrayForm: this.fb.array([this.fb.control('')]),
    });
  } */

/* crearItem(){
  return this.fb.control({
    nombre: ["", Validators.minLength(7)],
    email: ["", Validators.email],
  });
} */

addItem(){
  this.arrayForm.push(this.fb.control(''))
  /* this.arrayForm = this.form.get("arrayForm") as FormArray;
  this.arrayForm.push(this.crearItem()); */
}

removeItem(index) {
  console.log(index);
  this.arrayForm.removeAt(index);
}
onSubmit() {
  console.log(this.form.value);
  console.log(this.form.status);
}

get arrayForm() {
  return this.form.get('arrayForm') as FormArray;
}

}


