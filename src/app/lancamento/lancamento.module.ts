import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { MaterialModulesModule } from '../material-modules/material-modules.module';



@NgModule({
  declarations: [
    LancamentosComponent,
  ],
  imports: [
    CommonModule,
    MaterialModulesModule,
  ]
})
export class LancamentoModule { }
