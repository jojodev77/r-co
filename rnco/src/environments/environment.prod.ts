let  baseUrl = 'http://localhost:3000/rnco_api_private/'
export const environment = {
  production: true,
 

  createUserUrl: baseUrl + 'createUser',
  getUserConnexionUrl: baseUrl + 'connexionUser',

   //comment
   createCommentsUrl: baseUrl + 'createComment',
   getAllCommentsUrl: baseUrl + 'getAllComment',
};
