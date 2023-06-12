import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from './models';
import { MatDialog } from '@angular/material/dialog';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './store/curso.reducer';
import { selectCursoState } from './store/curso.selectors';
import { CursoActions } from './store/curso.actions';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  curso$: Observable<State>

  constructor(
    private cursosService: ServiceService,
    private dialog: MatDialog,
    private store: Store
  ) {
    this.curso$ = this.store.select(selectCursoState)
  }

  ngOnInit(): void {
    this.store.dispatch(CursoActions.loadCursos())
  }
  
  crearCurso(): void {
    this.dialog.open(AbmCursosComponent);
  }



  eliminarCurso(id: number): void {
    if (confirm('Está seguro?')) {
      this.store.dispatch(CursoActions.deleteCursos({id}));
    }
  }


}



