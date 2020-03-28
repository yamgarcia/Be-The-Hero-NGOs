const express = require("express");
const crypto = require("crypto");
const connection = require("./database/connection");

const NGOsController = require("./controllers/NGOsControllers");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

/**
 * @route    post /ngos
 * @desc     Add NGOs to Database
 * @access   Private
 */
routes.post("/ngos", NGOsController.create);

/**
 * @route    get /ngos
 * @desc     List all NGO entries
 * @access   Public
 */
routes.get("/ngos", NGOsController.index);

/**
 * @route    post /incidents
 * @desc     Add NGOs to Database
 * @access   Public
 */
routes.post("/incidents", IncidentController.create);

/**
 * @route    get /incidents
 * @desc     List all incident entries
 * @access   Public
 */
routes.get("/incidents", IncidentController.index);

/**
 * @route    delete /incidents
 * @desc     Delete selected incident
 * @access   Public
 */
routes.delete("/incidents/:id", IncidentController.delete);

/**
 * @route    get /profile
 * @desc     List incidents of specific NGO
 * @access   Public
 */
routes.get("/profile", ProfileController.index);

/**
 * @route    post /sessions
 * @desc     List incidents of specific NGO
 * @access   Public
 */
routes.post("/sessions", SessionController.index);

module.exports = routes;
