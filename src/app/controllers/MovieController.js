import Movie from "../models/Movie";
import Actor from "../models/Actor";
import Director from "../models/Director";
class MovieController {
  async index(req, res) {
    const movie = await Movie.findAll({
      include: [
        {
          model: Actor,
          as: "actor",
          through: { attributes: ["name"] }
        },
        {
          model: Director,
          as: "director",
          through: { attributes: ["name"] }
        }
      ]
    });

    return res.json(movie);
  }

  async store(req, res) {
    const { directors, actors, ...data } = req.body;

    var movie = await Movie.create(data);

    if ((actors && actors.length > 0) || (directors && directors.length > 0)) {
      movie.setActor(actors);
      movie.setDirector(directors);
    }

    return res.json(movie);
  }
}

export default new MovieController();
