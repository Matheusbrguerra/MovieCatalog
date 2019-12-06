import Sequelize, { Model } from "sequelize";
import Movie from "./Movie";

class Director extends Model {
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
      through: "diretor_movies",
      as: "director",
      foreignKey: "director_id"
    });
  }
}

export default Director;
