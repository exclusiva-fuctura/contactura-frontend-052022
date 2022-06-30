
export class AppSettings {

  private static get API_ENDPOINT(): string {
    return '/api';
  }

  public static get URL_AUTENTICADOR(): string {
    return AppSettings.API_ENDPOINT + '/autenticador';
  }

  public static get URL_LANCAMENTO(): string {
    return AppSettings.API_ENDPOINT + '/lancamento';
  }

  public static get URL_RELATORIO(): string {
    return AppSettings.API_ENDPOINT + '/relatorio';
  }

  public static get URL_USUARIO(): string {
    return AppSettings.API_ENDPOINT + '/usuario';
  }

}
