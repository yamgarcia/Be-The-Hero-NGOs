const express = require("express");
const crypto = require("crypto");
const connection = require("./database/connection");
const ngocontroller = require("./controllers/NGOsControllers");

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

routes.post("/ngos", ngocontroller.create);
routes.get("/ngos", ngocontroller.index);

module.exports = routes;
