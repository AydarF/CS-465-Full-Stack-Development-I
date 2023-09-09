/* GET travel view */
const travel = (res, req) => {
  res.render("travel", { title: "Travl Getaways" });
};

module.exports = {
  travel,
};
