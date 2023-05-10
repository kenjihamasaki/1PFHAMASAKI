import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from './service/usuario.service';
import { AbnUsuarioComponent } from './abn-usuario/abn-usuario.component';
import { Usuario } from '../core/models';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent implements OnInit {

  dataSource = new MatTableDataSource();

  displayedColumns = [
    'id',
    'nombre',
    'apellido',
    'email',
    'detalle',
    'editar',
    'eliminar',
  ];

  constructor(
    private usuarioService: UsuarioService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.usuarioService.obtenerUsuario().subscribe({
      next: (usuarios) => {
        this.dataSource.data = usuarios;
      },
    });
  }

  crearUsuario(): void {
    this.dialog.open(AbnUsuarioComponent);
  }

  aplicarFiltros(ev: Event): void {}

  irAlDetalle(cursoId: number): void {}

  eliminarUsuario(curso: Usuario): void {}

  editarUsuario(curso: Usuario): void {}

}
