import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/cliente';


@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})

export class ClienteDetailComponent implements OnInit {
  cliente: Cliente = {
    id: '',
    nombre: '',
    cedula: '',
    correo: '',
    celular: '',
  };

  constructor(private route: ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClienteDetail();
    console.log("Holiwi");
  }

  getClienteDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.getClienteById(id).subscribe(cliente => {
        this.cliente = cliente!;
      });
    }
  }
}
