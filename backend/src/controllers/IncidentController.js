const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    try {
      const { page = 1 } = req.query;

      //2nd 01:30:00 paging
      const [count] = await connection("incidents").count();
      const incidents = await connection("incidents")
        .join("ngos", "ngos.id", "=", "incidents.ngo_id")
        .limit(5)
        .offset((page - 1) * 5)
        .select([
          "incidents.*",
          "ngos.name",
          "ngos.email",
          "ngos.whatsapp",
          "ngos.city",
          "ngos.state"
        ]);
      res.header("X-Total-Count", count["count(*)"]);

      return res.json({ incidents });
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Server Error");
    }
  },

  async create(req, res) {
    try {
      const { title, description, value } = req.body;
      const ngo_id = req.headers.authorization;

      const [id] = await connection("incidents").insert({
        title,
        description,
        value,
        ngo_id
      });
      return res.json({ id });
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Server error");
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const ngo_id = req.headers.authorization;

      const inci = await connection("incidents")
        .where("id", id)
        .select("ngo_id")
        .first();

      if (inci.ngo_id != ngo_id) {
        return res
          .status(401)
          .json({ error: "Unauthorized - Operation not permitted" });
      }

      await connection("incidents")
        .where("id", id)
        .delete();
      return res.status(204).send();
    } catch (e) {
      console.error(e.message);
      res.status(500).send("Server error");
    }
  }
};
//---------------------01:16:00
