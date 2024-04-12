import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';
import { Mascota } from 'src/app/model/mascota';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  styleUrls: ['./mascota-form.component.css']
})
export class MascotaFormComponent implements OnInit {
  mascota: Mascota = {
    id: '',
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    enfermedad: '',
    foto: '',
    estado: true,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotaService: MascotaService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mascotaService.findById(id).subscribe(
        (mascota) => {
          if (mascota) {
            this.mascota = mascota;
          } else {
            console.log('La mascota no existe');
            this.router.navigate(['/'])
          }
        },
        (error) => {
          console.error('Error al obtener la mascota:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.mascota.id) {
      console.log('Actualizando mascota:', this.mascota);
      this.mascotaService.actualizarMascota(this.mascota).subscribe(
        () => {
          // Manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
          console.log('Mascota actualizada exitosamente.');
          // Redirigir al detalle de la mascota
          this.router.navigate(['/mascota/mascota-detail/'+ this.mascota.id]);
        },
        (error) => {
          console.error('Error al actualizar la mascota:', error);
          // Manejar el error, por ejemplo, mostrar un mensaje de error
        }
      );
    } else {
      console.log('Creando mascota:', this.mascota);  
      this.mascotaService.agregarMascota(this.mascota).subscribe(
        () => {
          // Manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
          console.log('Mascota creada exitosamente.');
          // Redirigir a la lista de mascotas
          this.router.navigate(['/mascotas']);
        },
        (error) => {
          console.error('Error al crear la mascota:', error);
          // Manejar el error, por ejemplo, mostrar un mensaje de error
        }
      );
    }
  }
}
