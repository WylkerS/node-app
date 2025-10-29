const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Minha aplicação Express" });
});

app.get("/sobre", (req, res) => {
  res.render("sobre", { title: "Sobre Nós" });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
