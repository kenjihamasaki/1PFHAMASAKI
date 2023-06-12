import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, Subject, map, tap, mergeMap, concatMap} from 'rxjs';
import { CrearCursoPayload, CreateCursoData, Curso, CursoWithSubject } from '../models';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  private cursos$ = new BehaviorSubject<Curso[]>([]);

  constructor(private httpClient: HttpClient) {}

  get cursos(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }

  obtenerCursos(): Observable<Curso[]> {
    return this.httpClient
      .get<Curso[]>(`${enviroment.apiBaseUrl}/courses?_expand=subject`)
      .pipe(
        tap((cursos) => this.cursos$.next(cursos)),
        mergeMap(() => this.cursos$.asObservable())
      );
  }

  obtenerCursosWithSubject(): Observable<CursoWithSubject[]> {
    return this.httpClient.get<CursoWithSubject[]>(
      `${enviroment.apiBaseUrl}/courses?_expand=subject`
    );
  }

  getCursoById(id: number): Observable<CursoWithSubject> {
    return this.httpClient.get<CursoWithSubject>(
      `${enviroment.apiBaseUrl}/courses/${id}?_expand=subject`
    );
  }

  deleteCursoById(id: number): Observable<unknown> {
    return this.httpClient.delete(
      `${enviroment.apiBaseUrl}/courses/${id}`
    );
  }

  crearCurso(data: CreateCursoData): Observable<CursoWithSubject> {
    return this.httpClient
      .post<Curso>(`${enviroment.apiBaseUrl}/courses`, data)
      .pipe(
        concatMap((createResponsive) =>
          this.getCursoById(createResponsive.id)
        )
      );
 
    };
  }

