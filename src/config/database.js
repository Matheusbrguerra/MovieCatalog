module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "film",
  define: {
    timstamps: true,
    underscored: true,
    underscoredAll: true
  }
};
