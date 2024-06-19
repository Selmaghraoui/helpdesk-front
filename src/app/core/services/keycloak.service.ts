// import { Injectable } from '@angular/core';
// import * as Keycloak from 'keycloak-js';
// import {
//   KeycloakInstance,
//   KeycloakConfig,
//   KeycloakInitOptions,
// } from 'keycloak-js';
// // import Keycloak, { KeycloakInstance, KeycloakConfig, KeycloakInitOptions } from 'keycloak-js';

// @Injectable({
//   providedIn: 'root',
// })
// export class KeycloakService {
//   private keycloakInstance: KeycloakInstance | null = null;
//   private initialized: boolean = false;

//   constructor() {}

//   init(options: {
//     config: KeycloakConfig;
//     initOptions: KeycloakInitOptions;
//   }): Promise<boolean> {
//     console.log('Initializing Keycloak with config:', options.config);
//     this.keycloakInstance = Keycloak(options.config);

//     return this.keycloakInstance
//       .init(options.initOptions)
//       .then((authenticated) => {
//         console.log('Keycloak initialized successfully:', authenticated);
//         this.initialized = true;
//         return authenticated;
//       })
//       .catch((error) => {
//         console.error('Keycloak initialization failed:', error);
//         this.keycloakInstance = null;
//         this.initialized = false;
//         return false;
//       });
//   }

//   signOut(): void {
//     if (this.keycloakInstance && this.initialized) {
//       console.log('Keycloak instance found, logging out');
//       this.keycloakInstance.logout({
//         redirectUri: window.location.origin,
//       });
//     } else {
//       console.error('Cannot sign out, Keycloak instance is not initialized');
//     }
//   }

//   isInitialized(): boolean {
//     return this.initialized;
//   }
// }
