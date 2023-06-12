import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ServiceService } from '../service/service.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Store } from '@ngrx/store';
import { CursoActions } from '../store/curso.actions';
import { CreateCursoData, Curso, CursoWithSubject } from '../models';
import { Materia } from 'src/app/subjects/models';



@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.scss']
})
export class AbmCursosComponent implements OnInit, OnDestroy{
  cursos: CursoWithSubject[] = [];

 

  selectedCourseControl = new FormControl<Curso | null>(null);
  fechaInicioControl = new FormControl('', [Validators.required]);
  fechaFinControl = new FormControl('', [Validators.required]);
  subjectIdControl = new FormControl<number | null>(null, [Validators.required,]);
  courseIdControl = new FormControl<number | null>(null, [Validators.required]);

  cursoForm = new FormGroup({
    fecha_inicio: this.fechaInicioControl,
    fecha_fin: this.fechaInicioControl,
    subjectId: this.subjectIdControl,
    courseId: this.courseIdControl,
  });

  destroyed$ = new Subject<void>();

  constructor(
    private serviceService: ServiceService,
    private dialogRef: DialogRef<AbmCursosComponent>,
    private store: Store,
  ) {
    this.selectedCourseControl.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (subject) => {
          if (subject) {
            this.subjectIdControl.setValue(subject.subjectId);
            this.courseIdControl.setValue(subject.id);
          }
        },
      });
   }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.serviceService.obtenerCursosWithSubject().subscribe({
      next: (res) => {
        this.cursos = res;
      },
    });
  }

  onSave(): void{
    this.store.dispatch(
      CursoActions.createCursos({
        data: this.cursoForm.value as CreateCursoData,
      })      
    );
    this.dialogRef.close();
  }

}
