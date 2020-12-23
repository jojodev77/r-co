let  baseUrl = 'http://localhost:3000/rnco_api_private/'
export const environment = {
  production: true,
 
// user
  createUserUrl: baseUrl + 'createUser',
  getUserConnexionUrl: baseUrl + 'connexionUser',

   //comment
   createCommentsUrl: baseUrl + 'createComment',
   getAllCommentsUrl: baseUrl + 'getAllComment',
   deleteCommentsUrl: baseUrl + 'deleteComment',
   updateCommentsUrl: baseUrl + 'updateComment',

       //information
       createInformationsUrl: baseUrl + 'createInformations',
       getAllInformationsUrl: baseUrl + 'getAllInformations',
};
