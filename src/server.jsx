const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3001;

app.use(express.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'G3FJ2023@@',
  database: 'escola'
});

// Conexão com o banco de dados
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

// Rota para cadastrar professor
app.get('/cadastrarProfessor', (req, res) => {
  const { nome } = req.body;
  const sql = 'INSERT INTO professores (nome) VALUES (?)';
  db.query(sql, [nome], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar professor:', err);
      res.status(500).json({ error: 'Erro ao cadastrar professor' });
    } else {
      res.status(200).json({ message: 'Professor cadastrado com sucesso' });
    }
  });
});

// Rota para cadastrar disciplina
app.post('/cadastrarDisciplina', (req, res) => {
  const { nome } = req.body;
  const sql = 'INSERT INTO disciplinas (nome) VALUES (?)';
  db.query(sql, [nome], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar disciplina:', err);
      res.status(500).json({ error: 'Erro ao cadastrar disciplina' });
    } else {
      res.status(200).json({ message: 'Disciplina cadastrada com sucesso' });
    }
  });
});

// Rota para cadastrar turma
app.post('/cadastrarTurma', (req, res) => {
  const { nome } = req.body;
  const sql = 'INSERT INTO turmas (nome) VALUES (?)';
  db.query(sql, [nome], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar turma:', err);
      res.status(500).json({ error: 'Erro ao cadastrar turma' });
    } else {
      res.status(200).json({ message: 'Turma cadastrada com sucesso' });
    }
  });
});

// Rotas para buscar professores, disciplinas e turmas
app.get('/professores', (req, res) => {
  db.query('SELECT * FROM professores', (err, result) => {
    if (err) {
      console.error('Erro ao buscar professores:', err);
      res.status(500).json({ error: 'Erro ao buscar professores' });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/disciplinas', (req, res) => {
  db.query('SELECT * FROM disciplinas', (err, result) => {
    if (err) {
      console.error('Erro ao buscar disciplinas:', err);
      res.status(500).json({ error: 'Erro ao buscar disciplinas' });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/turmas', (req, res) => {
  db.query('SELECT * FROM turmas', (err, result) => {
    if (err) {
      console.error('Erro ao buscar turmas:', err);
      res.status(500).json({ error: 'Erro ao buscar turmas' });
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
