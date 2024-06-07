import { KeycloakService } from 'keycloak-angular';

function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        // url: 'http://localhost:8080',
        // realm: 'your-realm',
        // clientId: 'your-client-id',
        url: 'http://localhost:8085/account',
        realm: 'helpdesk-realm',
        clientId: 'helpdesk',
      },
      //   initOptions: {
      //     onLoad: 'check-sso',
      //     silentCheckSsoRedirectUri:
      //       window.location.origin + '/assets/silent-check-sso.html',
      //   },
    });
}
