import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/Domain/profesor';
import { CursoService } from 'src/app/services/curso.service';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent {
  listadoClientesWS: any;

  listadoprofesoressWS: any;
  profesor: Profesor =new Profesor();

  constructor(private cursoSerivce: CursoService,private profesorService: ProfesorService, private router: Router) {}
  

  ngOnInit(): void {
    // Llamar al servicio para obtener la lista de clientes
    this.cursoSerivce.getAll().subscribe(
      (data: any) => {
        // Asignar los datos a listadoClientesWS cuando la respuesta sea exitosa
        this.listadoClientesWS = data;
        this.listadoprofesoressWS =data;
      },
      (error: any) => {
        console.error('Error al obtener la lista de clientes', error);
      }
    );
  }
}
