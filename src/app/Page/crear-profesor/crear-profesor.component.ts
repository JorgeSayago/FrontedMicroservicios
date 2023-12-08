import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/Domain/profesor';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-crear-profesor',
  templateUrl: './crear-profesor.component.html',
  styleUrls: ['./crear-profesor.component.css']
})
export class CrearProfesorComponent {

  
  profesor: Profesor= new Profesor();

  constructor(private profesorService: ProfesorService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.profesor= new Profesor()
        this.profesor = params['profesor']
      }
    }


    guardar(){
      console.log(this.profesor)
      this.profesorService.save(this.profesor).subscribe((data)=>{
        console.log("resultado POST: ", data)
        this.router.navigate(["pagina/ListaProfe"]);
      })
      this.profesor= new Profesor()



    }
}
