const express = require("express");

const routes = express.Router();

/**
 * HTTP Methods:
 *
 * GET: Search/list information on the backend
 * POST: Create information on the backend
 * PUT: Change information on the backend
 * DELETE: Delete information on the backend
 */

/**
 * Parameter types:
 *   Query params: named and sent in the route after "?" (filters, paging)
 *     http://localhost:3333/users?name=Marcos || /users?page=2&name=Marcos
 *   Route params: used to identify resources
 *     '/users/:id' ->  http://localhost:3333/users/1
 *   Request body: used to create or change resources
 */

routes.post("/ngos", (req, res) => {
  //   return res.send("hello worlds");

  // const params = req.querry; // access querry params. users?name=Marcos
  // const params = req.params; // access route params. users/1 when app.get("/users/:id")
  const data = req.body; // access body params. users/1 when app.get("/users/:id")
  console.log(data);

  return res.json({});
});

module.exports = routes;
