// Framework
const express = require("express");
const app = express();
const path = require("path");

// Define a pasta onde os arquivos estáticos estão localizados
const staticFolderPath = path.join(__dirname); // __dirname é a pasta onde o script está rodando

// Serve arquivos estáticos a partir da pasta do código
app.use(express.static(staticFolderPath));

// Define uma rota para a página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

//Add Studybox
app.post("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "add.html"));
});

// Define a porta do servidor
const PORT = process.env.PORT || 3000; // Corrigido aqui para garantir que funcione corretamente

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
