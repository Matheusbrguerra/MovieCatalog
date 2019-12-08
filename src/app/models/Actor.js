import Sequelize, { Model } from "sequelize";
import Movie from "./Movie";

class Actor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING
      },
      {
        sequelize
      }
    );
    return this;
  }

  static associate(model) {
    this.belongsToMany(model.Movie, {
      through: "actor_movies",
      as: "actor",
      foreignKey: "actor_id"
    });
  }
}

export default Actor;
