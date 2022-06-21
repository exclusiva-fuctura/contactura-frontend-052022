import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  formulario!: FormGroup;
  ehEdicao: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private state: AppState,
  ) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  get emailUsuario(): string {
    return this.state.usuario && this.state.usuario.email ? this.state.usuario.email : 'Nenhum usuário logado';
  }

  private iniciarFormulario(): void {
    const hoje = new Date();
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(5)]],
      nome: ['', Validators.required],
      telefone: '',
    });
  }

  onLogout(): void {
    this.router.navigate(['/login']);    
  }

  onClean(): void {
    this.formulario.reset();
  }

  onSave(): void {

  }

  onList(): void {
    this.router.navigate(['/usuario/listagem']);
  }
}
