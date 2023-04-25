import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../../services/alumno.service';
import { PeriodicElement } from '../../alumno.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss']
})
export class AlumnoDetalleComponent implements OnDestroy {
  
  alumno: PeriodicElement|undefined;

  private destroyed$ = new Subject()

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnoService: AlumnoService,
  ){
    this.alumnoService.obtenerAlumnoPorPosicion(parseInt(this.activatedRoute.snapshot.params['posicion']))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((alumno) => this.alumno = alumno);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
}
