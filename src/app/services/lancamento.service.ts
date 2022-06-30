import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app-settings';
import { ILancamentos } from '../models/lancamentos.interface';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor(
    private repositorio: RepositoryService) { }

  cadastrar(lancamento: ILancamentos): Observable<HttpResponse<ILancamentos>> {
    return this.repositorio.post<ILancamentos>(AppSettings.URL_LANCAMENTO, lancamento, RepositoryService.MEDIA_TYPE_APP_JSON);
  }

  editar(lancamento: ILancamentos): Observable<HttpResponse<ILancamentos>> {
    return this.repositorio.put<ILancamentos>(AppSettings.URL_LANCAMENTO + '/' + lancamento.id,
      lancamento, RepositoryService.MEDIA_TYPE_APP_JSON);
  }

  excluir(lancamento: ILancamentos): Observable<HttpResponse<ILancamentos>> {
    return this.repositorio.delete<ILancamentos>(AppSettings.URL_LANCAMENTO + '/' + lancamento.id,
      RepositoryService.MEDIA_TYPE_APP_JSON);
  }

  listaLancamentos(): Observable<HttpResponse<ILancamentos[]>> {
    return this.repositorio.get<ILancamentos[]>(AppSettings.URL_LANCAMENTO, RepositoryService.MEDIA_TYPE_APP_JSON);
  }

  lancamento(lancamento: ILancamentos): Observable<HttpResponse<ILancamentos>> {
    return this.repositorio.get<ILancamentos>(AppSettings.URL_LANCAMENTO + '/' + lancamento.id,
      RepositoryService.MEDIA_TYPE_APP_JSON);
  }
}
