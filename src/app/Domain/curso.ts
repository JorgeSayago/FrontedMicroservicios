import { Profesor } from "./profesor";

export class Curso{
    id: number =0;
    nombre:string='';
    horas: number =0;
    area: string ='';
    profesor!: Profesor;
}