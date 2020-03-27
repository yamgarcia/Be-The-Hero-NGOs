const express = require("express");
const crypto = require("crypto");
const connection = require("./database/connection");
const ngocontroller = require("./controllers/NGOsControllers");
const incidentController = require("./controllers/IncidentController");

const routes = express.Router();

/**
 * @route    post /ngos
 * @desc     Add NGOs to Database
 * @access   Private
 */
routes.post("/ngos", ngocontroller.create);

/**
 * @route    get /ngos
 * @desc     List all NGOs entries
 * @access   Public
 */
routes.get("/ngos", ngocontroller.index);

/**
 * @route    post /incidents
 * @desc     Add NGOs to Database
 * @access   Public
 */
routes.post("/incidents", incidentController.create);

module.exports = routes;
