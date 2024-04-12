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
  veterinario: Veterinario = {
    id: '',
    cedula: '',
    nombre: '',
    especialidad: '',
    foto: '',
    numAtenciones: 0
  };

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
        } else {
          console.log('El veterinario no existe');
          // Redirigir a una página de error o a otra ubicación deseada
          this.router.navigate(['/']); // Por ejemplo, redirige a la página principal
        }
      });
    }
  }

  onSubmit(): void {
    if (this.veterinario.id) {
      this.veterinarioService.actualizarVeterinario(this.veterinario);
      this.router.navigate(['/veterinarios/detail', this.veterinario.id]);
    } else {
      this.veterinarioService.crearVeterinario(this.veterinario);
      this.router.navigate(['/veterinarios']);
    }
  }
}
