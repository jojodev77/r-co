// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

let  baseUrl = 'http://localhost:3000/rnco_api_private/'
export const environment = {
  production: false,
 
//user
  createUserUrl: baseUrl + 'createUser',
  getUserConnexionUrl: baseUrl + 'connexionUser',
  getallUserUrl: baseUrl + 'allUser',

  //comment
  createCommentsUrl: baseUrl + 'createComment',
  getAllCommentsUrl: baseUrl + 'getAllComment',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
