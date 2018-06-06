const express = require("express");
const handlebars = require("express-handlebars").create({
  defaultLayout: "main"
});

const fortunes = [
  "Поздравляем! Вы находитесь на верном пути.",
  "Покорив одну гору, начинай штурмовать другую...",
  "Прилив энергии поможет Вам справиться с большим объемом незапланированных работ.",
  "Примите то, что вы не можете изменить, и вы будете чувствовать себя лучше.",
  "Природа, время и терпение - три великих врача.",
  "Пришло время действовать!"
];

const app = express();
app.engine("handlebars", handlebars.engine);

app.set("view engine", "handlebars");
app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/about", function(req, res) {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
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
