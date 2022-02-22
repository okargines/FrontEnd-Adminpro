import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    //nombre: ['Fernando', [Validators.required, Validators.minLength(3)]]
    nombre: ['Fernando', Validators.required],
    email: ['text100@gmail.com', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    terminos: [true, Validators.required],
  },{validators: this.passwordIguales});

  constructor(private fb: FormBuilder) { }

  crearUsuario(){
      this.formSubmitted = true;
      console.log(this.registerForm.value);
      //para imprimir el formulario en consola. y ver los valores. noEsIgual
      //console.log(this.registerForm);

      if(this.registerForm.valid){
        console.log('Posteando formulario');
      } else {
        console.log('Formulario no es correcto');
      }

  }

  contrasenasNoValidas (){
      const pass1 = this.registerForm.get('password').value;
      const pass2 = this.registerForm.get('password2').value;

      if(pass1 === pass2){
        return false;
      } else {
        return true;
      }
  } 

  campoNoValido(campo: string):boolean {
      if(this.registerForm.get(campo).invalid && this.formSubmitted){
        return true;
      }else{
        return false;
      }
  }
  aceptaTerminos(){
      return !this.registerForm.get('terminos') && this.formSubmitted; 
  }

  passwordIguales(pass1Name: string, pass2Name:string){
      return (formGroup: FormGroup) => {
        const pass1Control = formGroup.get(pass1Name);
        const pass2Control = formGroup.get(pass2Name);
  
        if(pass1Control.value === pass2Control.value){
            pass2Control.setErrors(null)
        } else {
            pass2Control.setErrors({noEsIgual: true})
        }
      }
  }
}
