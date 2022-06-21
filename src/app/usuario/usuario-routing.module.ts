import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'listagem', component: ListagemComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UsuarioRoutingModule { }