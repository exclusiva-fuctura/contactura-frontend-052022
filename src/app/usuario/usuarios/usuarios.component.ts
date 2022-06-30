import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/app.state';
import { IUsuario } from 'src/app/models/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

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
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.iniciarFormulario();

    this.activatedRoute.params.subscribe(params => {
      this.ehEdicao = !params['id'] ? false : true;
      if (params['id']) {
        this.procurar(params['id']);
      }
    });
  }

  get emailUsuario(): string {
    return this.state.usuario && this.state.usuario.email ? this.state.usuario.email : 'Nenhum usuário logado';
  }

  private iniciarFormulario(): void {
    const hoje = new Date();
    this.formulario = this.fb.group({
      id: '',
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(5)]],
      nome: ['', Validators.required],
      telefone: '',
    });
  }

  private carregarFormulario(usuario: IUsuario): void {    
    this.formulario.patchValue({
      id: usuario.id,
      email: usuario.email,
      nome: usuario.nome,
      telefone: usuario.telefone,
    });

    // se for edicao remover as validações da senha    
    this.formulario.controls['senha'].setValidators(null);
    this.formulario.controls['senha'].setErrors(null);
    this.formulario.updateValueAndValidity();
  
  }

  private procurar(id: string): void {
    this.usuarioService.usuario(id).subscribe({
      next: (resp) => {  
        if (resp.body) {
          const usuario: IUsuario = resp.body;
          this.carregarFormulario(usuario);
        }
      },
      error: (err: HttpErrorResponse) => {
        this.ehEdicao = false;
      }
    });
  }

  private cadastrar(usuario: IUsuario): void {
    this.usuarioService.cadastrar(usuario).subscribe({
      next: () => {        
        Swal.fire(
          'Criado',
          'Usuário criado com sucesso!',
          'success'
        );
        this.formulario.reset();
      },
      error: (err: HttpErrorResponse) => {
        let msg = err.message;
        // se erro na requisição
        Swal.fire(
          'Cadastro',
          msg,
          'error'
        );

        if (msg.includes('Sessão expirada')) {
          this.router.navigate(['/login']);
        }
      }       
    });
  }

  private alterar(usuario: IUsuario): void {
    this.usuarioService.editar(usuario).subscribe({
      next: () => {
        Swal.fire(
          'Alterar',
          'Usuário alterado com sucesso!',
          'success'
        );
        this.formulario.reset();
      },
      error: (err: HttpErrorResponse) => {
        let msg = err.message;
        // se erro na requisição
        Swal.fire(
          'Alterar',
          msg,
          'error'
        );

        if (msg.includes('Sessão expirada')) {
          this.router.navigate(['/login']);
        }
      }
    });
  }

  onLogout(): void {
    this.router.navigate(['/login']);    
  }

  onClean(): void {
    this.formulario.reset();
  }

  onSave(): void {
    const data: IUsuario = this.formulario.value;
    if (this.ehEdicao){
      this.alterar(data);
    } else {
      this.cadastrar(data);
    }
  }

  onList(): void {
    this.router.navigate(['/usuario/listagem']);
  }
}
