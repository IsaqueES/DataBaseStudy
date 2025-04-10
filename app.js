// Framework
    const express = require('express');
    const app = express();

// Define uma rota para a página principal
    app.get('/', (req, res) => {
    res.sendFile("index.html");
    });

// Define a porta do servidor
    const PORT = 3000;
    app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
