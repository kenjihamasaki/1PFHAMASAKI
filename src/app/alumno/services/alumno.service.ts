import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../enviroments/enviroments';
import { Alumno, CreateAlumno } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumno$ = new BehaviorSubject<Alumno[]>([])

  constructor(private httpClient: HttpClient ) { }

  getStudentsFromDB(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${enviroment.apiBaseUrl}/students`);
  }

  obtenerAlumnoById(id: number): Observable<Alumno>{
    return this.httpClient.get<Alumno>(
      `${enviroment.apiBaseUrl}/students/${id}`
    )
  }

  deleteAlumnoById(id: number): Observable<unknown> {
    return this.httpClient.delete(
      `${enviroment.apiBaseUrl}/students/${id}`
    )
  }

  createAlumnos(data: CreateAlumno): Observable<Alumno> {
    return this.httpClient
      .post<Alumno>(`${enviroment.apiBaseUrl}/students`, data)
      .pipe(
        concatMap((createResponse) =>
          this.obtenerAlumnoById(createResponse.id)
        )
      );
  }
}
