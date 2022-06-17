import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from './lancamentos/lancamentos.component';

const routes: Routes = [
    {path: 'lancamentos', component: LancamentosComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LancamentoRoutingModule { }