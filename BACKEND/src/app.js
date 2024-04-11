const express = require("express");

const app = express();

app.use(express.json());

app.post("/api/receber", (req, res) => {
  console.log("Dados recebidos:", req.body);
  res.send("Dados recebidos com sucesso!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
