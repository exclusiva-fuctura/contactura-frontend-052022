import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModulesModule } from './material-modules/material-modules.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppState } from './app.state';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorsService } from './services/token-interceptors.service';
import { RepositoryService } from './services/repository.service';
import { AutorizadorService } from './services/autorizador.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { LancamentoService } from './services/lancamento.service';
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModulesModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AppState,
    RepositoryService,
    AutorizadorService,
    UsuarioService,
    LancamentoService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorsService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
