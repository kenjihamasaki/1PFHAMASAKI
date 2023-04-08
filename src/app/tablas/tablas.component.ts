import { Component } from '@angular/core';

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
  dataSource = ELEMENT_DATA;
}
