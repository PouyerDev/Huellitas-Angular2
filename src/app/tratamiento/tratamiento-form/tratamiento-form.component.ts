import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TratamientoService } from 'src/app/service/tratamiento.service'; // Cambiar la importación al servicio de tratamiento
import { Tratamiento } from 'src/app/model/tratamiento'; // Cambiar la importación al modelo de tratamiento
import { MascotaService } from 'src/app/service/mascota.service'; // 
import { Mascota } from 'src/app/model/mascota';
import { Droga } from 'src/app/model/droga';
import { DrogaService } from 'src/app/service/droga.service';
import { Input } from '@angular/core';
import { VeterinarioService } from 'src/app/service/veterinario.service';
@Component({
  selector: 'app-tratamiento-form', // Cambiar el selector del componente
  templateUrl: './tratamiento-form.component.html', // Cambiar la ruta de la plantilla
  styleUrls: ['./tratamiento-form.component.css'] // Cambiar la ruta de los estilos
})
export class TratamientoFormComponent implements OnInit {
  veterinarioCedula: string = '';
  @Input() mascotaId!: number;
  tratamiento: Tratamiento = { // Cambiar la inicialización del tratamiento
    id: '',
    descripcion: '',
    fechaInicio: '',
    fechaFin: '',
    mascota: {
      id: '',
      nombre: '',
      raza: '',
      edad: 0,
      peso: 0,
      enfermedad: '',
      foto: '',
      estado: true
    },
    droga: {
      id: '',
      nombre: '',
      precioCompra: 0,
      precioVenta: 0,
      unidadesDisponibles: 0,
      unidadesVendidas: 0
    },
    veterinario: {
      id: '',
      cedula: '',
      nombre: '',
      especialidad: '',
      foto: '',
      numAtenciones: 0
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tratamientoService: TratamientoService, // Cambiar la inyección de dependencia al servicio de tratamiento
    private veterinarioService: VeterinarioService,
    private drogaService: DrogaService
  ) { }

  ngOnInit(): void {
    console.log('TratamientoFormComponent');
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tratamientoService.findById(id).subscribe(
        (tratamiento) => {
          if (tratamiento) {
            this.tratamiento = tratamiento;
          } else {
            console.log('El tratamiento no existe');
            // Redirigir a una página de error o a otra ubicación deseada
            this.router.navigate(['/']); // Por ejemplo, redirige a la página principal
          }
        },
        (error) => {
          console.error('Error al obtener el tratamiento:', error);
        }
      );
    }
  }

  // Método para obtener el veterinario por cédula
  obtenerVeterinarioPorCedula(cedula: string): void {
    this.veterinarioService.obtenerPorCedula(cedula).subscribe(
      (veterinario) => {
        this.tratamiento.veterinario = veterinario;
      },
      (error) => {
        console.error('Error al obtener el veterinario:', error);
        // Manejar el error, por ejemplo, mostrar un mensaje de error
      }
    );
  }
  
  // Método para obtener la droga por nombre
  obtenerDrogaPorNombre(nombre: string): void {
    this.drogaService.obtenerPorNombre(nombre).subscribe(
      (droga) => {
        this.tratamiento.droga = droga;
      },
      (error) => {
        console.error('Error al obtener la droga:', error);
        // Manejar el error, por ejemplo, mostrar un mensaje de error
      }
    );
  }
  onSubmit(): void {
    if (this.veterinarioCedula) {
      this.obtenerVeterinarioPorCedula(this.veterinarioCedula);
    }
    if (this.tratamiento.droga) {
      this.obtenerDrogaPorNombre(this.tratamiento.droga.nombre);
    }
    if (this.tratamiento.id) {
      console.log('Actualizando tratamiento:', this.tratamiento);
      this.tratamientoService.modificarTratamiento(this.tratamiento).subscribe(
        () => {
          // Manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
          console.log('Tratamiento actualizado exitosamente.');
          // Redirigir al detalle del tratamiento
          this.router.navigate(['/tratamiento/tratamiento-detail/'+ this.tratamiento.id]);
        },
        (error) => {
          console.error('Error al actualizar el tratamiento:', error);
          // Manejar el error, por ejemplo, mostrar un mensaje de error
        }
      );
    } else {
      console.log('Creando tratamiento:', this.tratamiento);  
      this.tratamientoService.agregarTratamiento(this.tratamiento).subscribe(
        () => {
          // Manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
          console.log('Tratamiento creado exitosamente.');
          // Redirigir a la lista de tratamientos
          this.router.navigate(['/tratamientos']);
        },
        (error) => {
          console.error('Error al crear el tratamiento:', error);
          // Manejar el error, por ejemplo, mostrar un mensaje de error
        }
      );
    }
  }
}
