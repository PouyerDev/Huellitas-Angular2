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
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-tratamiento-form', // Cambiar el selector del componente
  templateUrl: './tratamiento-form.component.html', // Cambiar la ruta de la plantilla
  styleUrls: ['./tratamiento-form.component.css'] // Cambiar la ruta de los estilos
})
export class TratamientoFormComponent implements OnInit {
  veterinarioCedula: string = '';
  drogas: any[] = [];
  veterinarios: any[] = [];
  drogaNombre: string = '';
  mascotaId: string | null = null; // Inicializar como null
  tratamiento: Tratamiento = {
    descripcion: '',
    fechaInicio: '',
    fechaFin: '',
    id: '',
    mascota: {
      nombre: '',
      raza: '',
      edad: 0,
      peso: 0,
      enfermedad: '',
      foto: '',
      estado: true,
      id: '',
      cliente: {
        cedula: '',
        nombre: '',
        correo: '',
        celular: '',
        id: ''
      }
    },
    "droga": {
      id: '',
      nombre: '',
      precioCompra: 0,
      precioVenta: 0,
      unidadesDisponibles: 0,
      unidadesVendidas: 0
    },
    veterinario: {
      id: '',
      nombre: '',
      cedula: '',
      especialidad: '',
      numAtenciones: 0,
      foto: '',
      estado: true
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tratamientoService: TratamientoService, // Cambiar la inyección de dependencia al servicio de tratamiento
    private veterinarioService: VeterinarioService,
    private drogaService: DrogaService,
    private mascotaService: MascotaService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.mascotaId = params['mascotaId'] || null;
    });
    
    this.authService.getCurrentUserCedula().subscribe(cedula => {
      this.veterinarioCedula = cedula.toString();
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tratamientoService.findById(id).subscribe(
        (tratamiento) => {
          if (tratamiento) {
            this.tratamiento = tratamiento;
            this.veterinarioCedula = tratamiento.veterinario ? tratamiento.veterinario.cedula : '';
            this.mascotaId = tratamiento.mascota ? tratamiento.mascota.id : '';
            this.drogaNombre = tratamiento.droga ? tratamiento.droga.nombre : '';
          } else {
            console.log('El tratamiento no existe');
            this.router.navigate(['/']);
          }
        },
        (error) => {
          console.error('Error al obtener el tratamiento:', error);
        }
      );
    } else {
  
      // Obtener lista de drogas
      this.drogaService.getAllDrogasValidas().subscribe(
        (drogas) => {
          this.drogas = drogas;
        },
        (error) => {
          console.error('Error al obtener la lista de drogas:', error);
        }
      );
    }
  }
  


  // Método para obtener el veterinario por cédula
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

obtenerDrogaPorNombre(nombre: string): void {
  
  this.drogaService.obtenerPorNombre(nombre).subscribe(
    (droga) => {
      this.tratamiento.droga = droga;
      console.log('Droga encontrada');

    },
    (error) => {
      console.error('Error al obtener la droga:', error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error
    }
  );
}


  obtenerMascotaPorId(id: string): void {
    this.mascotaService.findById(id).subscribe(
      (mascota) => {
        this.tratamiento.mascota = mascota;
      },
      (error) => {
        console.error('Error al obtener la mascota:', error);
        // Manejar el error, por ejemplo, mostrar un mensaje de error
      }
    );
  }
  onSubmit(): void {
    if (!this.veterinarioCedula || !this.drogaNombre || !this.mascotaId) {
      console.error('Faltan datos necesarios para completar la operación.');
      return;
    }
  
    // Creamos un array de promesas para esperar que todas las operaciones necesarias se completen.
    const tasks = [];
    tasks.push(this.veterinarioService.obtenerPorCedula(this.veterinarioCedula).toPromise());
    tasks.push(this.drogaService.obtenerPorNombre(this.drogaNombre).toPromise());
    tasks.push(this.mascotaService.findById(this.mascotaId).toPromise());
  
    Promise.all(tasks).then(results => {
      // Asigna los resultados a las propiedades correspondientes
      this.tratamiento.veterinario = results[0];
      this.tratamiento.droga = results[1];
      this.tratamiento.mascota = results[2];
  
      // Ahora procedemos a enviar el tratamiento, ya sea actualizar o crear uno nuevo.
      if (this.tratamiento.id) {
        console.log('Actualizando tratamiento:', this.tratamiento);
        this.tratamientoService.modificarTratamiento(this.tratamiento).subscribe(
          () => {
            console.log('Tratamiento actualizado exitosamente.');
            this.router.navigate(['/mascotas/detail/' + this.mascotaId]);
          },
          (error) => {
            console.error('Error al actualizar el tratamiento:', error);
          }
        );
      } else {
        console.log('Creando tratamiento:', this.tratamiento);
        this.tratamientoService.agregarTratamiento(this.tratamiento).subscribe(
          () => {
            console.log('Tratamiento creado exitosamente.');
            this.router.navigate(['/mascotas/detail/' + this.mascotaId]);
          },
          (error) => {
            console.error('Error al crear el tratamiento:', error);
          }
        );
      }
    }).catch(error => {
      console.error('Error en la obtención de datos necesarios:', error);
      // Manejar el error adecuadamente
    });
  }
  
   minFechaInicio(): string {
    return new Date().toISOString().split('T')[0]; // Obtener la fecha actual
  }

  minFechaFin(): string {
    return this.tratamiento.fechaInicio || new Date().toISOString().split('T')[0]; //
  }
}
