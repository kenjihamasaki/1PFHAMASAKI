import { Injectable } from '@angular/core';
import { PeriodicElement } from '../alumno.component';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumno$ = new BehaviorSubject<PeriodicElement[]>([ {
    id: 1,
    nombre: 'Juan',
    apellido: 'Sosa',
    fecha_registro: new Date(),
    email: "juansosa@gmail.com",
  },
  {
    id: 2,
    nombre: 'Miriam',
    apellido: 'Paez',
    fecha_registro: new Date(),
    email: "miriampaez@gmail.com",
  },
  {
    id: 3,
    nombre: 'Cynthia',
    apellido: 'Coronel',
    fecha_registro: new Date(),
    email: "cynthiacoronel@gmail.com",
  },])

  constructor(private httpClient: HttpClient ) { }

  getStudentsFromDB(): Observable<PeriodicElement[]> {
    return this.httpClient.get<PeriodicElement[]>(`${enviroment.apiBaseUrl}/students`);
  }

  obtenerAlumno(): Observable<PeriodicElement[]>{
    return this.alumno$.asObservable();
  }

  obtenerAlumnoPorPosicion(posicion: number): Observable<PeriodicElement | undefined>{
    return this.alumno$.asObservable()
    .pipe(
      map((alumnos)=> alumnos.find((a)=> a.id === posicion))
    )
  }
}
