import { Component, Input, OnInit } from '@angular/core';
import { Veterinario } from 'src/app/model/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';
import { Mascota } from 'src/app/model/mascota';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-veterinario-detail',
  templateUrl: './veterinario-detail.component.html',
  styleUrls: ['./veterinario-detail.component.css'],
})
export class VeterinarioDetailComponent implements OnInit {
  @Input() veterinario!: Veterinario;
  mascotas!: Mascota[]
  constructor(
    private veterinarioService: VeterinarioService,
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.veterinarioService.getVeterinarioById(id).subscribe((veterinario) => {
          this.veterinario = veterinario;
        });
        this.veterinarioService.getMascotasByVeterinarioId(id).subscribe(mascotas => {
          this.mascotas = mascotas;
        });
      }
      
    });





  }

}
