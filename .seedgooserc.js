module.exports = {
  modelBaseDirectory: "app_server/database/models",
  models: ["*.js", "!db.js"],
  data: "data", // data directory
  db: "mongodb://127.0.0.1:27017/travlr", // db connection url
};
