const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

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

  const newUser = { name, email, password };
  db.users.push(newUser);
  fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));

  res.status(200).json({ message: 'Cadastro realizado com sucesso.' });
});

// Rota de login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = db.users.find((user) => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }

  const token = jwt.sign({ email: user.email }, secretKey);

  res.status(200).json({ message: 'Login bem-sucedido.', token });
});

// Rota para exibir o relatório de despesas
app.get('/relatorio-despesas', (req, res) => {
  const despesasData = fs.readFileSync('despesas.json', 'utf8');
  const despesas = JSON.parse(despesasData).despesas;

  const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);

  const html = `
    <html>
      <head>
        <title>Relatório de Despesas</title>
      </head>
      <body>
        <h1>Relatório de Despesas</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
          ${despesas.map(despesa => `
            <tr>
              <td>${despesa.id}</td>
              <td>${despesa.descricao}</td>
              <td>${despesa.valor}</td>
            </tr>
          `).join('')}
        </table>
        <p>Total de Despesas: R$ ${totalDespesas.toFixed(2)}</p>
      </body>
    </html>
  `;

  res.send(html);
});

// Rota para exibir o relatório de ganhos
app.get('/relatorio-ganhos', (req, res) => {
  const ganhosData = fs.readFileSync('ganhos.json', 'utf8');
  const ganhos = JSON.parse(ganhosData).ganhos;

  const totalGanhos = ganhos.reduce((total, ganho) => total + ganho.valor, 0);

  const html = `
    <html>
      <head>
        <title>Relatório de Ganhos</title>
      </head>
      <body>
        <h1>Relatório de Ganhos</h1>
        <table>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
          ${ganhos.map(ganho => `
            <tr>
              <td>${ganho.data}</td>
              <td>${ganho.descricao}</td>
              <td>${ganho.valor}</td>
            </tr>
          `).join('')}
        </table>
        <p>Total de Ganhos: R$ ${totalGanhos.toFixed(2)}</p>
      </body>
    </html>
  `;

  res.send(html);
});

// Rota para exibir o relatório de metas
app.get('/relatorio-metas', (req, res) => {
  const metasData = fs.readFileSync('metas.json', 'utf8');
  const metas = JSON.parse(metasData).metas;

  const html = `
    <html>
      <head>
        <title>Relatório de Metas</title>
      </head>
      <body>
        <h1>Relatório de Metas</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Progresso</th>
          </tr>
          ${metas.map(meta => `
            <tr>
              <td>${meta.id}</td>
              <td>${meta.descricao}</td>
              <td>${meta.valor}</td>
              <td>${meta.progresso}</td>
            </tr>
          `).join('')}
        </table>
      </body>
    </html>
  `;

  res.send(html);
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
