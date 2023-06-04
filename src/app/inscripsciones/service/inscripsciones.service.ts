import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap } from 'rxjs';
import { InscripcionWithAll, Inscripcion, CreateInscripcionData } from '../models';
import { enviroment } from '../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class InscripscionesService {
  constructor(private httpClient: HttpClient) {}

  createInscripcion(data: CreateInscripcionData): Observable<InscripcionWithAll> {
    return this.httpClient
      .post<Inscripcion>(`${enviroment.apiBaseUrl}/inscriptions`, data)
      .pipe(
        concatMap((createResponse) =>
          this.getInscriptionWithAllById(createResponse.id)
        )
      );
  }

  getInscriptionWithAllById(id: number): Observable<InscripcionWithAll> {
    return this.httpClient.get<InscripcionWithAll>(
      `${enviroment.apiBaseUrl}/inscriptions/${id}?_expand=student&_expand=subject&_expand=course`
    )
  }

  getAllInscripciones(): Observable<InscripcionWithAll[]> {
    return this.httpClient.get<InscripcionWithAll[]>(
      `${enviroment.apiBaseUrl}/inscriptions?_expand=course&_expand=student&_expand=subject`
    );
  }

  deleteInscripcionById(id: number): Observable<unknown> {
    return this.httpClient.delete(
      `${enviroment.apiBaseUrl}/inscriptions/${id}`
    );
  }
}
