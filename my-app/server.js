const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const cors = require('cors'); // Adicione o pacote CORS para lidar com as requisições do cliente React.

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors()); // Habilita o CORS para aceitar solicitações do cliente React.

// Carrega o db.json
const dbFile = 'db.json';
const db = JSON.parse(fs.readFileSync(dbFile, 'utf8'));

// Secret key para a autenticação JWT
const secretKey = 'secretkeys';

// Rota de registro de usuário
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = db.users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'Email já cadastrado.' });
  }

  // Cria um novo usuário
  const newUser = { name, email, password };
  db.users.push(newUser);
  fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));

  res.status(200).json({ message: 'Cadastro realizado com sucesso.' });
});

// Rota de login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Verifica se o usuário existe
  const user = db.users.find((user) => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }

  // Gera um token JWT
  const token = jwt.sign({ email: user.email }, secretKey);

  res.status(200).json({ message: 'Login bem-sucedido.', token });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
