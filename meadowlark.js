const express = require("express");
const fortunes = require("./lib/fortune");
const handlebars = require("express-handlebars").create({
  defaultLayout: "main"
});

const app = express();
app.engine("handlebars", handlebars.engine);

app.set("view engine", "handlebars");
app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/about", function(req, res) {
  const fortune = fortunes.getFortune();
  res.render("about", { fortune });
});

app.use(function(req, res) {
  res.status(404);
  res.render("404");
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render("500");
});

app.listen(app.get("port"), function() {
  console.info(
    "Express started on localhost:" +
      app.get("port") +
      "; press Ctrl+C for exit."
  );
});
