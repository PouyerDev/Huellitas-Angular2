import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Droga } from 'src/app/model/droga';
import { DrogaService } from 'src/app/service/droga.service';

@Component({
  selector: 'app-droga-form',
  templateUrl: './droga-form.component.html',
  styleUrls: ['./droga-form.component.css'],
})
export class DrogaFormComponent implements OnInit {
  droga: Droga = {
    id: '',
    nombre: '',
    precioCompra: 0,
    precioVenta: 0,
    unidadesDisponibles: 0,
    unidadesVendidas: 0,
  };
  constructor(
    private drogaService: DrogaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('DrogaFormComponent');

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.drogaService.findById(id).subscribe(
        (droga) => {
          if (droga) {
            this.droga = droga;
          } else {
            console.log('La droga no existe');
            // Redirigir a una página de error o a otra ubicación deseada
            this.router.navigate(['/']);
          }
        },
        (error) => {
          console.error('Error al obtener la droga:', error);
        }
      );
    }
  }
  OnSubmit(): void {
    if (this.droga.id) {
      console.log('Actualizando droga:', this.droga);
      this.drogaService.modificarDroga(this.droga).subscribe(
        () => {
          // Manejar la respuesta, por ejemplo, mostrar un mensaje de actualización exitosa
          console.log('Droga actualizada exitosamente');
          // Redirigir al detalle de la droga
          this.router.navigate(['/droga/droga-detail/' + this.droga.id]);
        },
        (error) => {
          console.error('Error al actualizar la droga:', error);
          // Manejar el error, por ejemplo, mostrar un mensaje de error
        }
      );
    } else {
      console.log('Creando droga:', this.droga);
      this.drogaService.agregarDroga(this.droga).subscribe(
        () => {
          // Manejar la respuesta, por ejemplo, mostrar un mensaje de creación exitosa
          console.log('Droga creada exitosamente');
          // Redirigir a la lista de drogas
          this.router.navigate(['/drogas']);
        },
        (error) => {
          console.error('Error al crear la droga:', error);
          // Manejar el error, por ejemplo, mostrar un mensaje de error
        }
      );
    }
  }


  onSubmit(): void {
    
    if (this.droga.id) {
      console.log('Actualizando droga:', this.droga);
      
      this.drogaService.actualizarDroga(this.droga);
      this.router.navigate(['/drogas/detail', this.droga.id]);
      console.log("droga actualizado");
    } else {
      console.log('Creando droga:', this.droga);
      this.drogaService.crearDroga(this.droga);
      this.router.navigate(['/drogas']);
      console.log("droga creado");
      
    }
  }




















}
