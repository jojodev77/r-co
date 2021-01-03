let  baseUrl = 'http://localhost:3000/rnco_api_private/'
export const environment = {
  production: true,
 
//user
createUserUrl: baseUrl + 'createUser',
getUserConnexionUrl: baseUrl + 'connexionUser',
getallUserUrl: baseUrl + 'allUser',
deleteUserUrl: baseUrl + 'deleteUser',

//comment
createCommentsUrl: baseUrl + 'createComment',
getAllCommentsUrl: baseUrl + 'getAllComment',
getAllCommentByValidate: baseUrl + 'getAllCommentByValidate',
deleteCommentsUrl: baseUrl + 'deleteComment',
updateCommentsUrl: baseUrl + 'updateComment',

  //information
  createInformationsUrl: baseUrl + 'createInformations',
  getAllInformationsUrl: baseUrl + 'getAllInformations',
  deleteInformationsUrl: baseUrl + 'deleteInformations',
};
