import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from './services/alumno.service';
import { State } from './store/alumno.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAlumnoState } from './store/alumno.selectors';
import { AlumnoActions } from './store/alumno.actions';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {
  alumno$: Observable<State>;


  constructor(
    private matDialog: MatDialog,
    private store: Store
  ){
    this.alumno$ = this.store.select(selectAlumnoState)
  }
  ngOnInit(): void {
    this.store.dispatch(AlumnoActions.loadAlumnos())
  }

  eliminarAlumno(id: number): void {
    this.store.dispatch(AlumnoActions.deleteAlumnos({id}))
  }

  crearAlumnos(): void {
    this.matDialog.open(AbmAlumnosComponent)
  }

  

}
