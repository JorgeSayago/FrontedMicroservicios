import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/Domain/curso';
import { Profesor } from 'src/app/Domain/profesor';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent {

  curso: Curso= new Curso();

  constructor(private cursoService: CursoService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.curso= new Curso()
        this.curso = params['curso']
      }

    }
    


    guardar(){
      console.log(this.curso)
      this.cursoService.save(this.curso).subscribe((data)=>{
        console.log("resultado POST: ", data)
        this.router.navigate(["pagina/ListaCurso"]);
      })
      this.curso= new Curso()



    }
  }
