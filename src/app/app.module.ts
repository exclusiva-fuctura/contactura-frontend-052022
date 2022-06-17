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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModulesModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AppState,
    RepositoryService,
    AutorizadorService,

    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorsService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
