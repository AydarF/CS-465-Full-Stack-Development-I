/* GET homepage */
const index = (res, req) => {
  res.render("index", { title: "Travlr Getaways" });
};

module.exports = {
  index,
};
