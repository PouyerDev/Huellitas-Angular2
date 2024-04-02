import { Component, Input } from '@angular/core';
import { Mascota } from '../mascota';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-mascota-detail',
  templateUrl: './mascota-detail.component.html',
  styleUrls: ['./mascota-detail.component.css'],
})
export class MascotaDetailComponent {
  @Input()
  mascota!: Mascota;

  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

ngOnInit(): void {
  this.route.params.subscribe((params) => {
    const id = params['id'];
    this.mascota = this.mascotaService.fidnById(id);
  });


}

}
