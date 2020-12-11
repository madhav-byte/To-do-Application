/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
  // user routes
  'POST /user/register': 'user/register',
  'GET /user/confirm': 'user/confirmsails',
  'POST /user/login': 'user/login',
  
  "POST /user":"UserController.create",
  "DELETE /user/:id":"UserController.delete",
  "GET /user/:email" :"UserController.find",
  "Get /user/id/":"UserController.find",

  //task routes
  "POST /task":"TaskController.create",
  "PUT /task/:id":"TaskController.update",
  "DELETE /task/:id":"TaskController.delete"
};
