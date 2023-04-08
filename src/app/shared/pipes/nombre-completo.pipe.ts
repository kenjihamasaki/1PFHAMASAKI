import { Pipe, PipeTransform } from '@angular/core';
import { PeriodicElement } from 'src/app/tablas/tablas.component';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: PeriodicElement, ...args: unknown[]): unknown {
    return `${value.nombre} ${value.apellido}`;
  }

}
