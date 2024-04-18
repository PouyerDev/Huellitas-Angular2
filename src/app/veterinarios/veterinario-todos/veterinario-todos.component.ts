import { Component, OnInit } from '@angular/core';
import { Veterinario } from 'src/app/model/veterinario'; 
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-veterinario-todos',
  templateUrl: './veterinario-todos.component.html',
  styleUrls: ['./veterinario-todos.component.css']
})
export class VeterinarioTodosComponent implements OnInit {
  veterinarios: Veterinario[] = [];

  constructor(private veterinarioService: VeterinarioService) { }

  ngOnInit(): void {
    this.loadVeterinarios();
  }

  loadVeterinarios(): void {
    this.veterinarioService.getAllVeterinarios().subscribe(veterinarios => {
      this.veterinarios = veterinarios;
    });
  }

  verDetalle(veterinarioId: string): void {
    this.veterinarioService.getVeterinarioById(veterinarioId).subscribe();
  }

  deactivateVeterinario(veterinarioId: string): void {
    this.veterinarioService.cambiarEstadoVeterinario(veterinarioId).subscribe(() => {
      // Reload veterinarios after the change
      this.loadVeterinarios();
    });
  }

  activateVeterinario(veterinarioId: string): void {
    this.veterinarioService.cambiarEstadoVeterinario(veterinarioId).subscribe(() => {
      // Reload veterinarios after the change
      this.loadVeterinarios();
    });
  }
}
