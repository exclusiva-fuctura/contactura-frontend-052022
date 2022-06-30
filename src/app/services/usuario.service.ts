import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app-settings';
import { IUsuario } from '../models/usuario.interface';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private repositorio: RepositoryService) { }

  cadastrar(usuario: IUsuario): Observable<HttpResponse<IUsuario>> {
    return this.repositorio.post<IUsuario>(AppSettings.URL_USUARIO, usuario, RepositoryService.MEDIA_TYPE_APP_JSON);
  }

  editar(usuario: IUsuario): Observable<HttpResponse<IUsuario>> {
    return this.repositorio.put<IUsuario>(AppSettings.URL_USUARIO + '/' + usuario.id,
      usuario, RepositoryService.MEDIA_TYPE_APP_JSON);
  }

  excluir(usuario: IUsuario): Observable<HttpResponse<IUsuario>> {
    return this.repositorio.delete<IUsuario>(AppSettings.URL_USUARIO + '/' + usuario.id,
      RepositoryService.MEDIA_TYPE_APP_JSON);
  }

  listaUsuarios(): Observable<HttpResponse<IUsuario[]>> {
    return this.repositorio.get<IUsuario[]>(AppSettings.URL_USUARIO, RepositoryService.MEDIA_TYPE_APP_JSON);
  }

  usuario(id: string): Observable<HttpResponse<IUsuario>> {
    return this.repositorio.get<IUsuario>(AppSettings.URL_USUARIO + '/' + id,
      RepositoryService.MEDIA_TYPE_APP_JSON);
  }
}
