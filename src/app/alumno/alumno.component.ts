import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from './services/alumno.service';

export interface PeriodicElement {
  posicion: number;
  nombre: string;
  apellido: string;
  email:string;
  fecha_registro: Date;
  
}

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent {
  displayedColumns: string[] = ['posicion', 'nombreCompleto', 'email', 'fecha_registro', 'eliminar', 'editar', 'detalles'];


  dataSource = new MatTableDataSource<PeriodicElement>();

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue?.trim()?.toLowerCase();
  }

  constructor(
    private matDialog: MatDialog, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alumnoService: AlumnoService,
    ){
      this.alumnoService.obtenerAlumno()
        .subscribe((alumnos)=>{
          this.dataSource.data = alumnos;
        })
      
    }

  irAlDetalle(alumnoPosicion: number): void{
    this.router.navigate([alumnoPosicion],{
      relativeTo: this.activatedRoute,
    })
  }
  abrirABMAlumnos(): void{
    const dialog = this.matDialog.open(AbmAlumnosComponent)

    dialog.afterClosed().subscribe((valor)=> {
     if (valor) {
      this.dataSource.data = [
        ...this.dataSource.data, 
        {
          ...valor,
          fecha_registro: new Date(),
          posicion: this.dataSource.data.length + 1,
        }];

     } 
    });    
  }

  eliminarAlumno(alumnoParaEliminar: PeriodicElement ): void{

    this.dataSource.data = this.dataSource.data.filter(
      (alumnoActual) => alumnoActual.posicion !== alumnoParaEliminar.posicion,
    )
  }

  editarAlumno(alumnoParaEditar: PeriodicElement): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent, {
      data: {
        alumnoParaEditar
      }
    })
  
    dialog.afterClosed().subscribe((valorDelFormulario)=>{
      if (valorDelFormulario) {
        this.dataSource.data = this.dataSource.data.map(
          (alumnoActual) => alumnoActual.posicion === alumnoParaEditar.posicion
          ?({ ...alumnoActual, ...valorDelFormulario})
          : alumnoActual,
        )
      }
    })
  }
}
