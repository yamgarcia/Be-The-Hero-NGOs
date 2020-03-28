const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    try {
      const ngos = await connection("ngos").select("*");
      return res.json(ngos);
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Server Error");
    }
  },

  async create(req, res) {
    // const data = req.querry; // access querry params. users?name=Marcos
    // const data = req.params; // access route params. users/1 when app.get("/users/:id")
    // const data = req.body; // access body data to create or change resources.
    const { name, email, whatsapp, city, state } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");

    try {
      await connection("ngos").insert({
        id,
        name,
        email,
        whatsapp,
        city,
        state
      });
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Server Error");
    }

    return res.json({ id });
  }
};
