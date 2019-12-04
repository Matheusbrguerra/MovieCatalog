import Actor from "../models/Actor";

class ActorController {
  async index(req, res) {
    const actors = await Actor.findAll();

    return res.json(actors);
  }

  async store(req, res) {
    const { name } = req.body;

    const ifActorExists = await Actor.findOne({ where: { name } });

    if (ifActorExists) {
      return res.status(400).json({ error: "Actor already exists" });
    }

    const actor = await Actor.create({ name });

    return res.json(actor);
  }

  async delete(req, res) {
    const { id } = req.params;
    const actor = await Actor.findByPk(id);

    if (!actor) {
      return res.status(404).json({ error: "Actor does not exist !!" });
    }

    await Actor.destroy({ where: { id } });

    return res.json(actor);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const actor = await Actor.findByPk(id);

    if (!actor) {
      return res.status(400).json({ error: "Actor does not exist !!" });
    }

    if (actor.name === name) {
      return res
        .status(400)
        .json({ error: "New actor name is the same of older name" });
    }
    await Actor.update({ name }, { where: { id } });

    return res.json({
      message: `Actor with id:${id} and name: ${actor.name} has been changed to ${name}`
    });
  }
}

export default new ActorController();
