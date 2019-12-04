import Actor from "../models/Actor";

class ActorController {
  async store(req, res) {
    const { name } = req.body;

    const ifActorExists = await Actor.findOne({ where: { name } });

    if (ifActorExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const actor = await Actor.create({ name });

    return res.json(actor);
  }
}

export default new ActorController();
