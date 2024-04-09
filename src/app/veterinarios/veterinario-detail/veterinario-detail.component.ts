import { Component, Input, OnInit } from '@angular/core';
import { Veterinario } from 'src/app/model/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service'; // Asegúrate de importar el servicio de veterinario
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-veterinario-detail',
  templateUrl: './veterinario-detail.component.html',
  styleUrls: ['./veterinario-detail.component.css'],
})
export class VeterinarioDetailComponent implements OnInit {
  @Input()
  veterinario!: Veterinario;

  constructor(
    private veterinarioService: VeterinarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.veterinarioService.getVeterinarioById(id).subscribe(veterinario => {
        if (veterinario) {
          this.veterinario = veterinario;
        } else {
          // 
        }
      });
    });
  }
}
