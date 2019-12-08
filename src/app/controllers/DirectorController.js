import Director from "../models/Director";

class DirectorController {
  async index(req, res) {
    const directors = await Director.findAll();

    return res.json(directors);
  }

  async store(req, res) {
    const { name } = req.body;

    const ifDirectorExists = await Director.findOne({ where: { name } });

    if (ifDirectorExists) {
      return res.status(400).json({ error: "Director already exists" });
    }

    const director = await Director.create({ name });

    return res.json(director);
  }

  async delete(req, res) {
    const { id } = req.params;
    const director = await Director.findByPk(id);

    if (!director) {
      return res.status(404).json({ error: "Director does not exist !!" });
    }

    await Director.destroy({ where: { id } });

    return res.json(director);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const director = await Director.findByPk(id);

    if (!director) {
      return res.status(400).json({ error: "Director does not exist !!" });
    }

    if (director.name === name) {
      return res
        .status(400)
        .json({ error: "New director name is the same of older name" });
    }

    await Director.update({ name }, { where: { id } });

    return res.json({
      message: `Director with id:${id} and name: ${director.name} has been changed to ${name}`
    });
  }
  async single(req, res) {
    const { id } = req.params;
    const director = await Director.findOne({ where: { id } });

    return res.json(director);
  }
}

export default new DirectorController();
