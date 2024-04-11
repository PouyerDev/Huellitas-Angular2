import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-cliente-todos',
  templateUrl: './cliente-todos.component.html',
  styleUrls: ['./cliente-todos.component.css']
})
export class ClienteTodosComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    this.clienteService.getAllClientes().subscribe({
      next: (clientes: Cliente[]) => {
        this.clientes = clientes;
      },
      error: (error) => {
        console.error('Error al cargar clientes:', error);
      }
    });
  }

  verDetalle(clienteId: string): void {
    // Implementa la navegación al detalle del cliente según el clienteId
  }

  deleteCliente(clienteId: string): void {
    this.clienteService.deleteCliente(clienteId).subscribe({
      next: () => {
        console.log('Cliente eliminado exitosamente.');
        // Una vez eliminado el cliente, actualiza la lista de clientes
        this.loadClientes();
      },
      error: (error) => {
        console.error('Error al eliminar cliente:', error);
      }
    });
  }
}
