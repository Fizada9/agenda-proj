import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import axios from 'axios';


const App = () => {
  const [professor, setProfessor] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [turma, setTurma] = useState('');
  const [professores, setProfessores] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);
  const [turmas, setTurmas] = useState([]);

  const [horarioProfessor, setHorarioProfessor] = useState('');
  const [horarioDisciplina, setHorarioDisciplina] = useState('');
  const [horarioTurma, setHorarioTurma] = useState('');
  const [numeroDias, setNumeroDias] = useState(1);
  const [horarios, setHorarios] = useState([]);

  const [calendarDate, setCalendarDate] = useState(new Date());

  const handleCadastro = () => {
    // Lógica para cadastrar professor, disciplina e turma
app.post('/cadastrarProfessor', (req, res) => {
  const { nome } = req.body;
  db.query('INSERT INTO professores (nome) VALUES (?)', [nome], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar professor:', err);
      res.status(500).json({ error: 'Erro ao cadastrar professor' });
    } else {
      res.status(200).json({ message: 'Professor cadastrado com sucesso' });
    }
  });
});

if (professor !== '') {
  axios.post('/cadastrarProfessor', { nome: professor })
    .then(response => {
      console.log(response.data); // Mensagem do servidor
      setProfessores([...professores, { id: response.data.id, nome: professor }]);
      setProfessor('');
    })
    .catch(error => {
      console.error('Erro ao cadastrar professor:', error);
    });
}

// Rota para cadastrar disciplina
app.post('/cadastrarDisciplina', (req, res) => {
  const { nome } = req.body;
  db.query('INSERT INTO disciplinas (nome) VALUES (?)', [nome], (err, result) => {
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
  db.query('INSERT INTO turmas (nome) VALUES (?)', [nome], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar turma:', err);
      res.status(500).json({ error: 'Erro ao cadastrar turma' });
    } else {
      res.status(200).json({ message: 'Turma cadastrada com sucesso' });
    }
  });
});

    setProfessor('');
    setDisciplina('');
    setTurma('');
  };

  const handleCadastroHorario = () => {
    const novoHorario = {
      professor: horarioProfessor,
      disciplina: horarioDisciplina,
      turma: horarioTurma,
      numeroDias,
    };
    setHorarios([...horarios, novoHorario]);

    setHorarioProfessor('');
    setHorarioDisciplina('');
    setHorarioTurma('');
    setNumeroDias(1);
  };

  useEffect(() => {
    setCalendarDate(new Date());
  }, [horarios]);

  return (
    <div>
      <h1>Cadastro de Professor, Disciplina e Turma</h1>
      <input
        type="text"
        placeholder="Professor"
        value={professor}
        onChange={(e) => setProfessor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Disciplina"
        value={disciplina}
        onChange={(e) => setDisciplina(e.target.value)}
      />
      <input
        type="text"
        placeholder="Turma"
        value={turma}
        onChange={(e) => setTurma(e.target.value)}
      />
      <button onClick={handleCadastro}>Cadastrar</button>

      <h2>Cadastro de Horários</h2>
      <select value={horarioProfessor} onChange={(e) => setHorarioProfessor(e.target.value)}>
        <option value="">Selecione o Professor</option>
        {professores.map((professor) => (
          <option key={professor.id} value={professor.nome}>
            {professor.nome}
          </option>
        ))}
      </select>
      
      <select value={horarioDisciplina} onChange={(e) => setHorarioDisciplina(e.target.value)}>
        <option value="">Selecione a Disciplina</option>
        {disciplinas.map((disciplina) => (
          <option key={disciplina.id} value={disciplina.nome}>
            {disciplina.nome}
          </option>
        ))}
      </select>

      <select value={horarioTurma} onChange={(e) => setHorarioTurma(e.target.value)}>
        <option value="">Selecione a Turma</option>
        {turmas.map((turma) => (
          <option key={turma.id} value={turma.nome}>
            {turma.nome}
          </option>
        ))}
      </select>

      {/* Campo para número de dias */}
      <input
        type="number"
        placeholder="Número de dias da matéria"
        value={numeroDias}
        onChange={(e) => setNumeroDias(parseInt(e.target.value))}
      />
      <button onClick={handleCadastroHorario}>Cadastrar</button>

      {/* Calendário */}
      <h2>Calendário</h2>
      <Calendar 
      className="custom-calendar"
      value={calendarDate} />
    </div>
    );
  };
  
  export default App;