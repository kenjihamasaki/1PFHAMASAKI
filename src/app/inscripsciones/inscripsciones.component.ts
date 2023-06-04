import { Component, OnInit } from '@angular/core';
import { InscripscionesService } from './service/inscripsciones.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './store/inscripsciones.reducer';
import { selectInscripscionesState } from './store/inscripsciones.selectors';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { InscripscionesActions } from './store/inscripsciones.actions';
import { InscripcionDialogComponent } from './inscripcion-dialog/inscripcion-dialog.component';




@Component({
  selector: 'app-inscripsciones',
  templateUrl: './inscripsciones.component.html',
  styleUrls: ['./inscripsciones.component.scss']
})
export class InscripscionesComponent implements OnInit {

  state$: Observable<State>
  

  constructor(
    private inscripscionesService: InscripscionesService,
    private store: Store,
    private matDialog: MatDialog,
    private httpClient: HttpClient  
    ){
    this.state$ = this.store.select(selectInscripscionesState);
    }
    
  ngOnInit(): void {
    this.store.dispatch(InscripscionesActions.loadInscripsciones())
  }

  eliminarInscripcionPorId(id: number): void {
    this.store.dispatch(InscripscionesActions.deleteInscripsciones({ id }));
  }

  crearInscripcion(): void {
    this.matDialog.open(InscripcionDialogComponent);
  }
}
