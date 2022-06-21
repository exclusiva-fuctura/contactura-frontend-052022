import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListagemComponent } from './listagem/listagem.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuarioRoutingModule,
  ]
})
export class UsuarioModule { }
