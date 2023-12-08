import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './Page/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './Page/listar-cliente/listar-cliente.component';
import { CrearCursoComponent } from './Page/crear-curso/crear-curso.component';
import { CrearProfesorComponent } from './Page/crear-profesor/crear-profesor.component';
import { ListaCursoComponent } from './Page/lista-curso/lista-curso.component';
import { ListaProfesorComponent } from './Page/lista-profesor/lista-profesor.component';


const routes: Routes = [ 
  { path:"pagina/crearCliente",component:CrearClienteComponent},
  { path:"pagina/listarCliente",component:ListarClienteComponent},
  { path:"pagina/crearCurso",component:CrearCursoComponent},
  { path:"pagina/crearProfesor",component:CrearProfesorComponent},
  { path:"pagina/ListaCurso",component:ListaCursoComponent},
  { path:"pagina/ListaProfe",component:ListaProfesorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
