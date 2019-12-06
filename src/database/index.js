import Sequelize from "sequelize";

import databaseConfig from "../config/database";

import User from "../app/models/User";
import Actor from "../app/models/Actor";
import Director from "../app/models/Director";
import Movie from "../app/models/Movie";

const models = [User, Actor, Director, Movie];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
