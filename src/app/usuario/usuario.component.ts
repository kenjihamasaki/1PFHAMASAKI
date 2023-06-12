import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from './service/usuario.service';
import { AbnUsuarioComponent } from './abn-usuario/abn-usuario.component';
import { Usuario } from '../core/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUsuarioState } from './store/usuario.selectors';
import { UsuarioActions } from './store/usuario.actions';
import { State } from './store/usuario.reducer';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent implements OnInit {
  user$: Observable<State>;


  constructor(
    private usuarioService: UsuarioService,
    private dialog: MatDialog,
    private store: Store
  ) {
    this.user$ = this.store.select(selectUsuarioState)
  }

  ngOnInit(): void {
    this.store.dispatch(UsuarioActions.loadUsuarios())
  }

  eliminarUsuarioPorId(id: number): void {
    this.store.dispatch(UsuarioActions.deleteUsuarios({ id }));
  }

  crearUsuario(): void {
    this.dialog.open(AbnUsuarioComponent);
  }

}
