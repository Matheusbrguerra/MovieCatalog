import Sequelize from "sequelize";

import databaseConfig from "../config/database";

import User from "../app/models/User";
import Actor from "../app/models/Actor";
import Director from "../app/models/Director";

const models = [User, Actor, Director];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
