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
}
