// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { CSPAuthenticationConfig, PfCoreBeEnvs } from '@vmw-pathfinder/ng-csp-authentication';

export const environment = {
  production: false,
  contentStack: {
    accessToken: 'blt6d2d619051424c65',
    environment: 'development',
    apiKey: 'blt9d048f13f004c604',
    apiVersion: 'v3'
  },
  CSP_AUTHENTICATION_CONFIG: {
    environment: PfCoreBeEnvs.Development,
    client_id: 'cm-dev',
    csp_login_url: 'https://console-stg.cloud.vmware.com/csp/gateway/discovery ',
    csp_sign_up_url: 'https://console-stg.cloud.vmware.com/csp/gateway/portal/#/onboarding/registration/signup',
    application_path: 'calculators'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
