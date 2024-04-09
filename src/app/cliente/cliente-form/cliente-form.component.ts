import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  cliente: Cliente = {
    id: '',
    nombre: '',
    cedula: '',
    correo: '',
    celular: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {

    console.log('ClienteFormComponent');
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.getClienteById(id).subscribe(cliente => {
        if (cliente) {
          this.cliente = cliente;
        } else {
          console.log('El cliente no existe');
          // Redirigir a una página de error o a otra ubicación deseada
          this.router.navigate(['/']); // Por ejemplo, redirige a la página principal
        }
      });
    }
    
  }

  onSubmit(): void {
    if (this.cliente.id) {
      this.clienteService.actualizarCliente(this.cliente).subscribe(/* Manejar respuesta*/ );
      this.router.navigate(['/cliente/cliente-detail', this.cliente.id]);
    } else {
      this.clienteService.crearCliente(this.cliente).subscribe(/* Manejar respuesta */ );
      this.router.navigate(['/clientes']);
    }
  }
}
