
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {

  checkRole,
 
};


/**
 * @param {array} roleRoute role autoriser pour la route
 * @param {array} roleUser  role user
 * cette fonction nous permet de verifier si un ulisateur a bien les droit d'accees a une route
 * elle prend aussi le cas ou un utilisateur peut avoir plusieur role
 */
function checkRole(roleRoute, roleUser) {
  // au depart on fixe l'autorisation a une false
  let authorization = false;
  //on boucle sur les role que pocede l'utilisateur
  for (let index = 0; index < roleUser.length; index++) {
    let result = roleRoute.filter((word) => word == roleUser[index]);
    //si l'user pocéde au moin une permission qui match avec les autorisation de la route
    //on passe authorization a true
    if (result.length > 0) {
      index = roleUser.length;
      authorization = true;
    }
  }
  return authorization;
}




