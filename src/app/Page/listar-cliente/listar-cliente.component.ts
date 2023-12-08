import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Domain/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent {
  listadoClientesWS: any;

  constructor(private personaSerivce: PersonaService, private router: Router) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener la lista de clientes
    this.personaSerivce.getAll().subscribe(
      (data: any) => {
        // Asignar los datos a listadoClientesWS cuando la respuesta sea exitosa
        this.listadoClientesWS = data;
      },
      (error: any) => {
        console.error('Error al obtener la lista de clientes', error);
      }
    );
  }
}
