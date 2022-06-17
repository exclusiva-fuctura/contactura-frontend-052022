import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { LancamentoRoutingModule } from './lancamento-routing.module';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LancamentosComponent,
    RelatoriosComponent,
  ],
  imports: [
    CommonModule,
    MaterialModulesModule,
    LancamentoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LancamentoModule { }
