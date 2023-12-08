import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MenuComponent } from './menu/menu.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { CrearClienteComponent } from './Page/crear-cliente/crear-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ListarClienteComponent } from './Page/listar-cliente/listar-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CrearProfesorComponent } from './Page/crear-profesor/crear-profesor.component';
import { CrearCursoComponent } from './Page/crear-curso/crear-curso.component';
import { ListaCursoComponent } from './Page/lista-curso/lista-curso.component';
import { ListaProfesorComponent } from './Page/lista-profesor/lista-profesor.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuComponent,
    PiePaginaComponent,
    CrearClienteComponent,
    ListarClienteComponent,
    CrearProfesorComponent,
    CrearCursoComponent,
    ListaCursoComponent,
    ListaProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
