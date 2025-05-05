# 📦 Automação de Cadastro de Produtos com HTML, Node.js e Python

Este projeto é uma solução simples e eficiente para cadastro de produtos com envio por e-mail e preenchimento automatizado de formulários.

Ele foi dividido em três partes:

✅ **Frontend (HTML + CSS)**: Um formulário bonito e funcional para cadastro de produtos.  
✅ **Backend (Node.js + Express + Nodemailer)**: Responsável por receber os dados do formulário e enviar e-mails com as informações do produto.  
✅ **Automação (Python + PyAutoGUI + Pandas)**: Um script que lê produtos de um CSV e preenche o formulário automaticamente.

---

## 🚀 Tecnologias Utilizadas

- **HTML e CSS (Frontend)**
- **JavaScript (Fetch API para envio dos dados)**
- **Node.js + Express (Backend do formulário)**
- **Nodemailer (Envio de e-mails)**
- **Python + PyAutoGUI + Pandas (Automatização do preenchimento)**

---

## 📌 Estrutura do Projeto

├── index.html # Página com o formulário de cadastro
├── style.css # Estilização do formulário
├── server.js # Servidor Express que recebe e envia os e-mails
├── preencher_formulario.py # Script Python para automação
├── produtos.csv # Base de produtos para preenchimento automático
├── .gitignore # Arquivos que não devem ser enviados para o GitHub (.env e node_modules)
└── README.md # Este arquivo
## ⚡ Como rodar o projeto

### 1️⃣ Backend (Servidor Node.js)

Instale as dependências:

```bash
npm install express nodemailer body-parser cors dotenv

Crie um arquivo .env com o seguinte conteúdo:
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-aplicativo
EMAIL_DEST=destino@email.com

Inicie o servidor:
node server.js

Instale as dependências:
pip install pandas pyautogui pyperclip

Abra o navegador no index.html, clique no campo ID do Produto e então rode:
python preencher_formulario.py
