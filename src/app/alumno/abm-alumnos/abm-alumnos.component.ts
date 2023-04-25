import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent {

  nombreControl = new FormControl('',[Validators.required]);
  apellidoControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('',[Validators.required,Validators.email])
  alumnosForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
  })


  constructor(private dialogRef: MatDialogRef<AbmAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) private data:any,
    ) {
      if (data) {
        this.nombreControl.setValue(data.alumnoParaEditar.nombre);
        this.apellidoControl.setValue(data.alumnoParaEditar.apellido);
        this.emailControl.setValue(data.alumnoParaEditar.email);
      } 
      console.log(data)
    }

  guardar(): void {
    if (this.alumnosForm.valid) {
      this.dialogRef.close(this.alumnosForm.value)
    } else {
      this.alumnosForm.markAllAsTouched();
    }
  }
}
