import { Injectable } from '@angular/core';
import { Persona } from '../Domain/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlBase="http://localhost:8080/MS1/Cliente/";

@Injectable({
  providedIn: 'root'
})
export class PersonaService {


  constructor(private http: HttpClient){}

 

  save(persona:Persona){

    console.log("Servicio POST")
    console.log("persona: "+persona.cedula)

    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<any>(urlBase+"guardar", JSON.stringify(persona), {headers})

  }

  getAll(): Observable<Persona[]>{
     return this.http.get<Persona[]>(urlBase+"all")
  }
}
