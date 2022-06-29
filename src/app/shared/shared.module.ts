import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutenticadorGuard } from './security/autenticador-guard.component';
import { FucturaGuard } from './security/fuctura-guard';

const components = [
  MenuComponent
]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule,    
    components
  ],
  providers: [
    AutenticadorGuard,
    FucturaGuard,
  ]
})
export class SharedModule { }
