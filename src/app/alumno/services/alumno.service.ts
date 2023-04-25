import { Injectable } from '@angular/core';
import { PeriodicElement } from '../alumno.component';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumno$ = new BehaviorSubject<PeriodicElement[]>([ {
    posicion: 1,
    nombre: 'Juan',
    apellido: 'Sosa',
    fecha_registro: new Date(),
    email: "juansosa@gmail.com",
  },
  {
    posicion: 2,
    nombre: 'Miriam',
    apellido: 'Paez',
    fecha_registro: new Date(),
    email: "miriampaez@gmail.com",
  },
  {
    posicion: 3,
    nombre: 'Cynthia',
    apellido: 'Coronel',
    fecha_registro: new Date(),
    email: "cynthiacoronel@gmail.com",
  },])

  constructor() { }

  obtenerAlumno(): Observable<PeriodicElement[]>{
    return this.alumno$.asObservable();
  }

  obtenerAlumnoPorPosicion(posicion: number): Observable<PeriodicElement | undefined>{
    return this.alumno$.asObservable()
    .pipe(
      map((alumnos)=> alumnos.find((a)=> a.posicion === posicion))
    )
  }
}
