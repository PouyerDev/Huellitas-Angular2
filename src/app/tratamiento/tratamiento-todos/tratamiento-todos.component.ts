import { Component, OnInit } from '@angular/core';
import { Tratamiento } from 'src/app/model/tratamiento';
import { TratamientoService } from 'src/app/service/tratamiento.service';
import { Input } from '@angular/core';
import { Mascota } from 'src/app/model/mascota';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-tratamiento-todos',
  templateUrl: './tratamiento-todos.component.html',
  styleUrls: ['./tratamiento-todos.component.css']
})
export class TratamientoTodosComponent implements OnInit {
  tratamientosList: Tratamiento[] = [];
  rol: string = '';
  @Input() mascota!: Mascota;
  constructor(
    private tratamientoService: TratamientoService,
     private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadTratamientos();

    this.authService.getCurrentUser().subscribe(rol => {
      this.rol = rol.toString();
    });
  }

  loadTratamientos(): void {
    this.tratamientoService.findAll().subscribe(tratamientos => {
      this.tratamientosList = tratamientos;
    });
  }

  deleteTratamiento(tratamientoId: string): void {
    this.tratamientoService.borrarTratamiento(tratamientoId).subscribe();
    this.mascota.tratamientos = this.mascota.tratamientos?.filter(tratamiento => tratamiento.id !== tratamientoId);
    
  }
}
