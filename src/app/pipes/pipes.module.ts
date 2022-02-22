import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';

//se comento porque no es necesarios es par ngFor y ng If
//y en este modulo no se utilizara esas clausulas.
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ImagenPipe
  ],
  imports: [
  ],
  exports: [
    ImagenPipe
  ]
})
export class PipesModule { }
