const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    try {
      const ngo_id = req.headers.authorization;

      const incidents = await connection("incidents")
        .where("ngo_id", ngo_id)
        .select("*");
      return res.json(incidents);
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Server Error");
    }
  }
};
