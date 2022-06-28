import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModulesModule } from '../material-modules/material-modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ]
})
export class SharedModule { }
