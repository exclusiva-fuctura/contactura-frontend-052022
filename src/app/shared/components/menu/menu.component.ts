import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onReceita() {
    this.router.navigate(['/lancamento/lancamentos/R'])
  }

  onDespesa() {
    this.router.navigate(['/lancamento/lancamentos/D'])
  }

  onUsuario() {
    this.router.navigate(['/usuario/usuarios'])
  }
}
