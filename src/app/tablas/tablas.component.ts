import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

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
  displayedColumns: string[] = ['posicion', 'nombre', 'apellido', 'fecha_registro'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
