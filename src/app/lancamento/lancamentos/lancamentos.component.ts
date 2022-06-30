import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import Swal, { SweetAlertIcon } from 'sweetalert2';

import { ILancamentos } from 'src/app/models/lancamentos.interface';
import { AppState } from 'src/app/app.state';


@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit {

  formulario!: FormGroup;
  lancamento: ILancamentos = {isEntrada: true};
  tipos: string[] = [
    'Salário', 
    'Pretação de serviços',
    'Vendas',
    'Investimentos',
    'Aluguel',
    'Doação',
    'Emprestimo',
    'Outros'
  ];
  ehEdicao: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private state: AppState,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.iniciarFormulario();

    this.activatedRoute.params.subscribe(params => {
      this.lancamento.isEntrada = params['id'] === 'D' ? false : true;      
    });
  }

  get tipoLancamento(): string {
    return this.lancamento && !this.lancamento.isEntrada ? 'DESPESA' : 'RECEITA';
  }

  get emailUsuario(): string {
    return this.state.usuario && this.state.usuario.email ? this.state.usuario.email : 'Nenhum usuário logado';
  }

  private iniciarFormulario(): void {
    const hoje = new Date();
    this.formulario = this.formBuilder.group({
      tipo: ['', Validators.required],
      descricao: ['', [Validators.required, Validators.minLength(5)]],
      ehFixo: [false, Validators.required],
      data: [hoje, Validators.required],
      valor: ['', Validators.required]
    });
  }

  onLogout(): void {
    this.router.navigate(['/login']);    
  }

  onSave(): void {
    const dados = this.formulario.value;
    if (this.ehEdicao) {
      Swal.fire(
        'Modo Edição',
        'processar a edição',
        'success'
      );
    } else {
      Swal.fire(
        'Modo Inclusão',
        'processar a inclusão',
        'success'
      );
      this.formulario.reset();
    }
  }

  onClean(): void {
    this.formulario.reset();
  }

}
