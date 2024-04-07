///objeto
let participantes = [
    {
        nome: 'Sandro',
        email: 'sandro@gmail.com',
        dataInscricao: new Date(2024, 2, 3, 1, 24),
        dataCheckIn: new Date(2024, 2, 25, 6, 30)
    },
    {
        nome: 'Raphael',
        email: 'raphael@gmail.com',
        dataInscricao: new Date(2024, 1, 3, 1, 24),
        dataCheckIn: null
    },
    {
        nome: 'Ana',
        email: 'ana@gmail.com',
        dataInscricao: new Date(2024, 1, 10, 12, 0),
        dataCheckIn: new Date(2024, 2, 20, 9, 15)
    },
    {
        nome: 'João',
        email: 'joao@gmail.com',
        dataInscricao: new Date(2024, 2, 15, 9, 30),
        dataCheckIn: null
    },
    {
        nome: 'Maria',
        email: 'maria@gmail.com',
        dataInscricao: new Date(2024, 3, 20, 15, 45),
        dataCheckIn: null
    },
    {
        nome: 'Pedro',
        email: 'pedro@gmail.com',
        dataInscricao: new Date(2024, 3, 25, 18, 0),
        dataCheckIn: new Date(2024, 2, 24, 11, 30)
    },
    {
        nome: 'Carla',
        email: 'carla@gmail.com',
        dataInscricao: new Date(2024, 3, 28, 20, 15),
        dataCheckIn: new Date(2024, 2, 26, 13, 15)
    },
    {
        nome: 'Luiz',
        email: 'luiz@gmail.com',
        dataInscricao: new Date(2024, 1, 5, 9, 0),
        dataCheckIn: new Date(2024, 2, 27, 10, 45)
    },
    {
        nome: 'Fernanda',
        email: 'fernanda@gmail.com',
        dataInscricao: new Date(2024, 2, 8, 14, 30),
        dataCheckIn: new Date(2024, 2, 28, 15, 0)
    },
    {
        nome: 'Lucas',
        email: 'lucas@gmail.com',
        dataInscricao: new Date(2024, 2, 12, 16, 45),
        dataCheckIn: null
    }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
    
    if(participante.dataCheckIn === null) {
        dataCheckIn = `
        <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
        id="btn-confirm"
      >
        Confirmar check-in
      </button>
    `
    }
  
    return `
    <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
    `;
  }
  
  const atualizarLista = (participantes) => {
    let output = "";
    for(let participante of participantes) {
      output += criarNovoParticipante(participante);
    }
  
    document.querySelector('tbody').innerHTML = output;
  }
  
  atualizarLista(participantes);
  
  const adicionarParticipante = (event) => {
    event.preventDefault();
  
    const dadosDoFormulario = new FormData(event.target);
  
    const participante = {
      nome: dadosDoFormulario.get('nome'),
      email: dadosDoFormulario.get('email'),
      dataInscricao: Date.now(),
      dataCheckIn: null  
    };
  
    const participanteExiste = participantes.find(
      (p) => p.email === participante.email
    );
  
    if(participanteExiste) {
      alert('Email já cadastrado!');
      return;
    }
  
    participantes = [participante, ...participantes];
    atualizarLista(participantes);
  
    event.target.querySelector('[name="nome"]').value = "";
    event.target.querySelector('[name="email"]').value = "";
  }
  
  const fazerCheckIn = (event) => {
    const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'; 
  
    if(!confirm(mensagemConfirmacao)) {
      return;
    }
  
    const participante = participantes.find(
      (p) => p.email === event.target.dataset.email
    );
    
    participante.dataCheckIn = Date.now();
  
    atualizarLista(participantes);
  }  