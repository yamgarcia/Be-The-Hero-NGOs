const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    try {
      const { id } = req.body;

      const ngo = await connection("ngos")
        .where("id", id)
        .select("name")
        .first();

      if (!ngo) {
        return res.status(400).json({ error: "ID doesn't match any NGO" });
      }
      return res.json(ngo);
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Server Error");
    }
  }
};
