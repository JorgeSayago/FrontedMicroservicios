import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from '../Domain/curso';
import { Observable } from 'rxjs';


const urlBase="http://34.125.83.82:8080/microservicios-rs/api/cursos/";
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient){}

 

  save(curso:Curso){

    console.log("Servicio POST")
    console.log("curso: "+curso.id)

    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<any>(urlBase+"guardar", JSON.stringify(curso), {headers})

  }

  getAll(): Observable<Curso[]>{
     return this.http.get<Curso[]>(urlBase+"all")
  }
}

