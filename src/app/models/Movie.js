import Sequelize, { Model } from "sequelize";
import Actor from "./Actor";
import Director from "./Director";

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        release_date: Sequelize.DATE,
        synopsis: Sequelize.STRING
      },
      {
        sequelize
      }
    );
    return this;
  }
  static associate(model) {
    this.belongsToMany(model.Actor, {
      through: "actor_movies",
      as: "actor",
      foreignKey: "movie_id"
    });
    this.belongsToMany(model.Director, {
      through: "director_movies",
      as: "director",
      foreignKey: "movie_id"
    });
  }
}

export default Movie;
