import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticadorGuard } from '../shared/security/autenticador-guard.component';
import { FucturaGuard } from '../shared/security/fuctura-guard';
import { ListagemComponent } from './listagem/listagem.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'listagem', 
    component: ListagemComponent,
    canActivate: [FucturaGuard, AutenticadorGuard]},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UsuarioRoutingModule { }