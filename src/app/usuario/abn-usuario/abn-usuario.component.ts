import { Component, OnInit, OnDestroy } from '@angular/core';
import { CreateUsuarioData, Usuario } from '../models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { UsuarioService } from '../service/usuario.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Store } from '@ngrx/store';
import { UsuarioActions } from '../store/usuario.actions';

@Component({
  selector: 'app-abn-usuario',
  templateUrl: './abn-usuario.component.html',
  styleUrls: ['./abn-usuario.component.scss']
})
export class AbnUsuarioComponent implements OnInit, OnDestroy {
  usuarios: Usuario[] = []

  selectedUsuarioControl = new FormControl<Usuario | null>(null);

  nombreControl = new FormControl('',[Validators.required]);
  apellidoControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('',[Validators.required,Validators.email])
  passwordControl = new FormControl('',[Validators.required]);
  tokenControl = new FormControl('',[Validators.required]);
  roleControl = new FormControl('',[Validators.required])

  usuarioForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    password: this.passwordControl,
    token: this.tokenControl,
    role: this.roleControl
  });

  destroyed$ = new Subject<void>();

  constructor(
    private usuariosService: UsuarioService,
    private dialogRef: DialogRef<AbnUsuarioComponent>,
    private store: Store
  ){
    this.selectedUsuarioControl.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: (usuario) => {
          if (usuario) {
            this.roleControl.setValue(usuario.role);
          }
        },
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.usuariosService.obtenerUsuario().subscribe({
      next: (res) =>{
        this.usuarios = res;
      }
    })
  }

  onSave(): void{
    this.store.dispatch(
      UsuarioActions.createUsuarios({
        data:this.usuarioForm.value as CreateUsuarioData
      })
    )
  }



}
