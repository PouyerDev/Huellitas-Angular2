import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from 'src/app/model/mascota';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  styleUrls: ['./mascota-form.component.css']
})
export class MascotaFormComponent {
  //evento
  @Output()
  addMascotaEvent = new EventEmitter<Mascota>();

  @Output()
  ocultarFormularioEvent = new EventEmitter<boolean>();
  
  sendMascota!: Mascota;
  //modelo
  formMascota: Mascota = {
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    enfermedad: '',
    foto: '',
    estado: true,
    id: ''
  };


  //agregar por formulario
  addMascotaForm() {
    console.log(this.formMascota);
    //copiar valores
    this.sendMascota = Object.assign({}, this.formMascota);

    this.addMascotaEvent.emit(this.sendMascota);
  }
  addMascota(form: any) {
    console.log(this.formMascota);
    //copiar valores
    this.sendMascota = Object.assign({}, this.formMascota);

    this.addMascotaEvent.emit(this.sendMascota);
  }

  cancelar() {
    this.ocultarFormularioEvent.emit(false);
  }
}
