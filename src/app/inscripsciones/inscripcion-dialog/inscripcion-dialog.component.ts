import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { DialogRef } from '@angular/cdk/dialog';
import { Curso, CursoWithSubject } from '../../curso/models';
import { PeriodicElement } from '../../alumno/alumno.component';
import { AlumnoService } from '../../alumno/services/alumno.service';
import { ServiceService } from '../../curso/service/service.service';
import { InscripscionesActions } from '../store/inscripsciones.actions';
import { CreateInscripcionData } from '../models';
import { Alumno } from 'src/app/alumno/models';

@Component({
  selector: 'app-inscripcion-dialog',
  templateUrl: './inscripcion-dialog.component.html',
  styleUrls: ['./inscripcion-dialog.component.scss'],
})
export class InscripcionDialogComponent implements OnInit, OnDestroy {
  alumnos: PeriodicElement[] = [];
  cursos: CursoWithSubject[] = [];

  selectedCourseControl = new FormControl<Curso | null>(null);

  studentIdControl = new FormControl<number | null>(null,[Validators.required])
  subjectIdControl = new FormControl<number | null>(null, [Validators.required,]);
  courseIdControl = new FormControl<number | null>(null, [Validators.required]);

  incripcionForm = new FormGroup({
    subjectId: this.subjectIdControl,
    studentId: this.studentIdControl,
    courseId: this.courseIdControl,
  });

  destroyed$ = new Subject<void>();

  constructor(
    private alumnosService: AlumnoService,
    private cursosService: ServiceService,
    private dialogRef: DialogRef<InscripcionDialogComponent>,
    private store: Store
  ) {

    this.selectedCourseControl.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (curso) => {
          if (curso) {
            this.subjectIdControl.setValue(curso.subjectId);
            this.courseIdControl.setValue(curso.id);
          }
        },
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.cursosService.obtenerCursosWithSubject().subscribe({
      next: (res) => {
        this.cursos = res;
      },
    });
    this.alumnosService.getStudentsFromDB().subscribe({
      next: (res) => {
        this.alumnos = res;
      },
    });
  }

  onSave(): void {
    this.store.dispatch(
      InscripscionesActions.createInscripsciones({
        data: this.incripcionForm.value as CreateInscripcionData,
      })
    );

    this.dialogRef.close();
  }
}
