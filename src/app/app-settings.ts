
export class AppSettings {

  private static get API_ENDPOINT(): string {
    return 'localhost:8081/api';
  }

  public static get URL_AUTENTICADOR(): string {
    return AppSettings.API_ENDPOINT + '/autenticador';
  }
}
