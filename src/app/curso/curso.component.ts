import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from './models';
import { MatDialog } from '@angular/material/dialog';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  dataSource = new MatTableDataSource();

  displayedColumns = [
    'id',
    'nombre',
    'fecha_inicio',
    'fecha_fin',
    'detalle',
    'editar',
    'eliminar',
  ];

  constructor(
    private cursosService: ServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cursosService.obtenerCursos().subscribe({
      next: (cursos) => {
        this.dataSource.data = cursos;
      },
    });
  }

  crearCurso(): void {
    this.dialog.open(AbmCursosComponent);
  }

  aplicarFiltros(ev: Event): void {}

  irAlDetalle(cursoId: number): void {}

  eliminarCurso(curso: Curso): void {}

  editarCurso(curso: Curso): void {}

}
