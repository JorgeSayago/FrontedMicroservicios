import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-lista-profesor',
  templateUrl: './lista-profesor.component.html',
  styleUrls: ['./lista-profesor.component.css']
})
export class ListaProfesorComponent {
    listadoClientesWS: any;
  
    constructor(private profesorSerivce: ProfesorService, private router: Router) {}
  
    ngOnInit(): void {
      // Llamar al servicio para obtener la lista de clientes
      this.profesorSerivce.getAll().subscribe(
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
