import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Droga } from 'src/app/model/droga';
import { DrogaService } from 'src/app/service/droga.service';

@Component({
  selector: 'app-droga-detail',
  templateUrl: './droga-detail.component.html',
  styleUrls: ['./droga-detail.component.css']
})
export class DrogaDetailComponent implements OnInit {
  @Input()
  droga!: Droga;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private drogaService: DrogaService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = String(params.get('id'));
      this.drogaService.findById(id).subscribe(
        (drogaInfo) => {
          this.droga = drogaInfo;
        }
      )
    });
  }

}
