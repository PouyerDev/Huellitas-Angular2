import { Component, Input, OnInit } from '@angular/core';
import { Droga } from 'src/app/model/droga';
import { Tratamiento } from 'src/app/model/tratamiento';
import { DrogaService } from 'src/app/service/droga.service';

@Component({
  selector: 'app-droga-todos',
  templateUrl: './droga-todos.component.html',
  styleUrls: ['./droga-todos.component.css']
})
export class DrogaTodosComponent implements OnInit {
  
  drogasList: Droga[] = [];
  @Input() tratamiento!: Tratamiento;
  constructor(private drogaService: DrogaService) { }

  ngOnInit(): void {
    this.loadDrogas();
  }

  loadDrogas(): void {
    this.drogaService.findAll().subscribe(drogas => {
      this.drogasList = drogas;
    });
  }
  verDetalles(drogaId: string): void {
    this.drogaService.findById(drogaId).subscribe(droga => {
      
    })
  }
  deleteDroga(drogaId: string): void {
    this.drogaService.deleteDroga(drogaId).subscribe({
      next: () => {
        console.log('Cliente eliminado exitosamente.');
        // Una vez eliminado el cliente, actualiza la lista de clientes
        this.loadDrogas();
      },
      error: (error) => {
        console.error('Error al eliminar cliente:', error);
      }
    });

  }
}
