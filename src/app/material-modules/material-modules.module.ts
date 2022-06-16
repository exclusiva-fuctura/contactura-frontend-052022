import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

export const material = [
  MatIconModule,
  MatInputModule,
  MatGridListModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports: [
    material
  ],
  providers: [
    MatIconRegistry
  ]
})
export class MaterialModulesModule { }
