import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/model/mascota';
import { Tratamiento } from 'src/app/model/tratamiento'; // Asegúrate de importar el modelo de tratamiento si aún no lo has hecho
import { MascotaService } from 'src/app/service/mascota.service';
import { TratamientoService } from 'src/app/service/tratamiento.service';
import { mergeMap } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-mascota-detail',
  templateUrl: './mascota-detail.component.html',
  styleUrls: ['./mascota-detail.component.css'],
})
export class MascotaDetailComponent implements OnInit {
  @Input()
  mascota!: Mascota;
  tratamiento!: Tratamiento;
  rol: string = '';
  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router,
    private tratamientoService: TratamientoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
   
    this.authService.getCurrentUser().subscribe(rol => {
      this.rol = rol.toString();
    });

    
    this.route.params.subscribe(params => {
      const id = String(params['id']);    
      this.mascotaService.findById(id).pipe(
        mergeMap((mascotaInfo) => {
          this.mascota = mascotaInfo;
          return this.mascotaService.getTratamientosByMascotaId(this.mascota.id);
        })
      ).subscribe((tratamientos) => {
        this.mascota.tratamientos = tratamientos.map(tratamiento => this.convertirATratamiento(tratamiento));
      });
    });
  }

  convertirATratamiento(data: any): Tratamiento {
    return {
      id: data.id || 0,
      descripcion: data.descripcion || '',
      fechaInicio: data.fechaInicio || '',
      fechaFin: data.fechaFin || '',
      mascota: data.mascota || {},
      droga: data.droga || {},
      veterinario: data.veterinario || {}
    };
  }
}
