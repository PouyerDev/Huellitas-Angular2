import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinarioService } from 'src/app/service/veterinario.service'; // Importa el servicio para veterinarios
import { Veterinario } from 'src/app/model/veterinario'; // Importa el modelo para veterinarios

@Component({
  selector: 'app-veterinario-form',
  templateUrl: './veterinario-form.component.html',
  styleUrls: ['./veterinario-form.component.css']
})
export class VeterinarioFormComponent implements OnInit {
  veterinario: Veterinario = new Veterinario(
    '', // id
    '', // cedula
    '', // nombre
    '', // especialidad
    '', // foto
    0, // numAtenciones
    '' // password
  );

  private vetOldPassword: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private veterinarioService: VeterinarioService // Inyecta el servicio para veterinarios
  ) { }

  ngOnInit(): void {
    console.log('VeterinarioFormComponent');
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.veterinarioService.getVeterinarioById(id).subscribe(veterinario => {
        if (veterinario) {
          this.veterinario = veterinario;
          this.vetOldPassword = veterinario.password;
          console.log('VeterinarioCargado:', veterinario);
        } else {
          console.log('El veterinario no existe');
          this.router.navigate(['/']); 
        }
      });
    }
  }

  onSubmit(): void {
    
    if (this.veterinario.id) {
      console.log('Actualizando veterinario:', this.veterinario);
      this.veterinarioService.actualizarVeterinario(this.veterinario);
      console.log('Veterinario:', this.veterinario)
      console.log("veterinario actualizado");
    } else {
      console.log('Creando veterinario:', this.veterinario);
      console.log('Veterinario:', this.veterinario.password  )
      this.veterinarioService.crearVeterinario(this.veterinario);
      console.log("veterinario creado");
    }
  }
}