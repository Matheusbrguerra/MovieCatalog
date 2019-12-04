import Sequelize, { Model } from "sequelize";

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
}

export default Actor;
