import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticadorGuard } from '../shared/security/autenticador-guard.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';

const routes: Routes = [
  {path: 'lancamentos', component: LancamentosComponent, canActivate: [AutenticadorGuard]},
  {path: 'lancamentos/:id', component: LancamentosComponent, canActivate: [AutenticadorGuard]},
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }