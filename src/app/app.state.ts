
import { Injectable } from '@angular/core';
import { IUsuario } from './models/usuario.interface';

@Injectable()
export class AppState {

  usuario: IUsuario = {} as IUsuario;
  token: string = '';

}
