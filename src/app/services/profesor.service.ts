import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profesor } from '../Domain/profesor';
import { Observable } from 'rxjs';


const urlBase="http://localhost:8081/MS1/Profesor/";

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient){}

 

  save(profesor:Profesor){

    console.log("Servicio POST")
    console.log("profesor: "+profesor.cedula)

    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.post<any>(urlBase+"guardar", JSON.stringify(profesor), {headers})

  }

  getAll(): Observable<Profesor[]>{
     return this.http.get<Profesor[]>(urlBase+"all")
  }
}

