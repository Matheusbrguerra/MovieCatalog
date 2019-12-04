import Director from "../models/Director";

class DirectorController {
  async store(req, res) {
    const { name } = req.body;

    const ifDirectorExists = await Director.findOne({ where: { name } });

    if (ifDirectorExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const director = await Director.create({ name });

    return res.json(director);
  }
}

export default new DirectorController();
