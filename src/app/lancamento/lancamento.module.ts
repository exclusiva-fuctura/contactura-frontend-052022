import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { LancamentoRoutingModule } from './lancamento-routing.module';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LancamentosComponent,
    RelatoriosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LancamentoRoutingModule,
  ]
})
export class LancamentoModule { }
