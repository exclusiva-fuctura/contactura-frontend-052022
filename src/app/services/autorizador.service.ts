import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app-settings';
import { AppState } from '../app.state';
import { ILogin } from '../models/login.interface';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizadorService {

  constructor(
    private state: AppState,
    private repositoryService: RepositoryService,
  ) { }

  get token(): string {
    return this.state.token;
  }

  set token(key: string) {
    this.state.token = key;
  }

  store(login: ILogin): Observable<HttpResponse<ILogin>> {
    return this.repositoryService.post<ILogin>(AppSettings.URL_AUTENTICADOR, login, RepositoryService.MEDIA_TYPE_APP_JSON);
  }
}
