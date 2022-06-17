import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal, { SweetAlertIcon } from 'sweetalert2';

import { AppState } from '../app.state';
import { AutorizadorService } from '../services/autorizador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  value: string = '';

  loginForm!: FormGroup;

  constructor(
    private autorizadorService: AutorizadorService,
    private router: Router,
    private state: AppState,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  public doLogin(): void {
    const formulario = this.loginForm.value;
    this.autorizadorService.store(formulario).subscribe(
      () => {
        this.router.navigate(['/lancamento/lancamentos']);
      },
      (err: HttpErrorResponse) => {

        let typeMsg: SweetAlertIcon = 'error';
        let titleMsg = 'Ocorreu um erro!';
        if (err.status < 500) {
          titleMsg = 'Alerta!';
          typeMsg = 'warning';
        }
        Swal.fire(
          titleMsg,
          err.message,
          typeMsg
        );
      }
    );
  }
}
