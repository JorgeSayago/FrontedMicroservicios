import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Domain/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {

  persona: Persona= new Persona();

  constructor(private personaService: PersonaService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.persona= new Persona()
        this.persona = params['persona']
      }
    }


    guardar(){
      console.log(this.persona)
      this.personaService.save(this.persona).subscribe((data)=>{
        console.log("resultado POST: ", data)
        this.router.navigate(["pagina/listarCliente"]);
      })
      this.persona= new Persona()



    }
}
