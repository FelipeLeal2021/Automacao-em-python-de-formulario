const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para receber dados do formulário
app.post('/enviar-email', async (req, res) => {
  const { id, nome, descricao, preco, quantidade, categoria } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Sistema de Cadastro" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_DEST,
    subject: 'Novo Produto Cadastrado',
    html: `
      <h2>Um novo produto foi cadastrado:</h2>
      <ul>
        <li><strong>ID:</strong> ${id}</li>
        <li><strong>Nome:</strong> ${nome}</li>
        <li><strong>Descrição:</strong> ${descricao}</li>
        <li><strong>Preço:</strong> R$ ${preco}</li>
        <li><strong>Quantidade:</strong> ${quantidade}</li>
        <li><strong>Categoria:</strong> ${categoria}</li>
      </ul>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).json({ error: 'Erro ao enviar e-mail' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
