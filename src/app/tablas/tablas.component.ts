import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';

export interface PeriodicElement {
  posicion: number;
  nombre: string;
  apellido: string;
  fecha_registro: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    posicion: 1,
    nombre: 'Juan',
    apellido: 'Sosa',
    fecha_registro: new Date()
  },
  {
    posicion: 2,
    nombre: 'Miriam',
    apellido: 'Paez',
    fecha_registro: new Date()
  },
  {
    posicion: 3,
    nombre: 'Cynthia',
    apellido: 'Coronel',
    fecha_registro: new Date()
  },
];

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {
  displayedColumns: string[] = ['posicion', 'nombreCompleto', 'fecha_registro'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private matDialog: MatDialog){}

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
    })
  }
}
