import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlumnoService } from '../services/alumno.service';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AlumnoActions } from '../store/alumno.actions';
import { Alumno, CreateAlumno } from '../models/index';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent implements OnInit, OnDestroy {
  alumnos: Alumno[] = [];

  nombreControl = new FormControl('',[Validators.required]);
  apellidoControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('',[Validators.required,Validators.email])
  alumnosForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
  })

  destroyed$ = new Subject<void>();

  constructor(
    private dialogRef: DialogRef<AbmAlumnosComponent>,
    private alumnoService: AlumnoService,
    private store: Store
    ) {}

  ngOnDestroy(): void {
   this.destroyed$.next();
   this.destroyed$.complete(); 
  }

  ngOnInit(): void {
    this.alumnoService.getStudentsFromDB().subscribe({
      next: (res) =>{
        this.alumnos = res;
      }
    })
  }

  onSave(): void {
    this.store.dispatch(
      AlumnoActions.createAlumnos({
        data: this.alumnosForm.value as CreateAlumno
      })
    );
    this.dialogRef.close()
  }
}
