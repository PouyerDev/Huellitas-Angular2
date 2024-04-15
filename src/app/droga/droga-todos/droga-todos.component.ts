import { Component, Input, OnInit } from '@angular/core';
import { Droga } from 'src/app/model/droga';
import { Tratamiento } from 'src/app/model/tratamiento';
import { ExcelService } from 'src/app/service/Excel.service';
import { DrogaService } from 'src/app/service/droga.service';


@Component({
  selector: 'app-droga-todos',
  templateUrl: './droga-todos.component.html',
  styleUrls: ['./droga-todos.component.css']
})
export class DrogaTodosComponent implements OnInit {
  
  drogasList: Droga[] = [];
  @Input() tratamiento!: Tratamiento;
  constructor(private drogaService: DrogaService,
    private excelService: ExcelService
  ) { }

  ngOnInit(): void {
    this.loadDrogas();
  }

  loadDrogas(): void {
    this.drogaService.getAllDrogas().subscribe(drogas => {
      this.drogasList = drogas;
    });
  }
  verDetalles(drogaId: string): void {
    this.drogaService.findById(drogaId).subscribe(droga => {
      
    })
  }
  /*
  deleteDroga(drogaId: string): void {
    this.drogaService.deleteDroga(drogaId).subscribe();
  
    this.drogasList = this.drogasList.filter(droga => droga.id !== drogaId);
  }
  */
  deleteDroga(drogaId: string): void {
    this.drogaService.deleteDroga(drogaId).subscribe({
      next: () => {
        console.log('Droga eliminado exitosamente.');
        // Una vez eliminado el cliente, actualiza la lista de Drogas
        this.loadDrogas();
      },
      error: (error) => {
        console.error('Error al eliminar Droga:', error);
      }
    });
  }

//exel
cargarDatosDesdeExcel(event: any): void {
  const file: File = event.target.files[0];

  if (file) {
    this.excelService.leerExcel(file).subscribe((drogas: Droga[]) => {
      this.agregarDrogasALaBaseDeDatos(drogas);
    }, (error) => {
      console.error('Error al cargar datos desde Excel:', error);
    });
  }
}
agregarDrogasALaBaseDeDatos(drogas: Droga[]): void {
  console.log('Drogas desde el archivo Excel:', drogas);
  drogas.forEach(droga => {
    this.drogaService.agregarDroga(droga).subscribe(
      () => {
        console.log(`Droga ${droga.nombre} agregada a la base de datos.`);
      },
      (error) => {
        console.error(`Error al agregar droga ${droga.nombre} a la base de datos:`, error);
      }
    );
    this.loadDrogas();
  }
);
}

}
