import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

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
    this.clienteService.getAllClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  verDetalle(clienteId: string): void {

  }
  
  deleteCliente(clienteId: string): void {
    // Llama al método del servicio para eliminar al cliente
    this.clienteService.deleteCliente(clienteId).subscribe(() => {
      // Una vez eliminado el cliente, actualiza la lista de clientes
      this.loadClientes();
    });
  }
}
