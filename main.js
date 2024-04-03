///objeto
const participantes = [
    {
        nome: 'Sandro',
        email: 'sandro@gmail.com',
        dataInscricao: new Date(2024, 2, 3, 1, 24),
        dateCheckIn: new Date(2024, 2, 25, 6, 30)
    },
    {
        nome: 'Raphael',
        email: 'raphael@gmail.com',
        dataInscricao: new Date(2024, 2, 3, 1, 24),
        dateCheckIn: new Date(2024, 2, 25, 6, 30)
    },
    {
        nome: 'Ana',
        email: 'ana@gmail.com',
        dataInscricao: new Date(2024, 1, 10, 12, 0),
        dateCheckIn: new Date(2024, 2, 20, 9, 15)
    },
    {
        nome: 'João',
        email: 'joao@gmail.com',
        dataInscricao: new Date(2024, 1, 15, 9, 30),
        dateCheckIn: new Date(2024, 2, 22, 14, 45)
    },
    {
        nome: 'Maria',
        email: 'maria@gmail.com',
        dataInscricao: new Date(2024, 1, 20, 15, 45),
        dateCheckIn: new Date(2024, 2, 23, 8, 0)
    },
    {
        nome: 'Pedro',
        email: 'pedro@gmail.com',
        dataInscricao: new Date(2024, 1, 25, 18, 0),
        dateCheckIn: new Date(2024, 2, 24, 11, 30)
    },
    {
        nome: 'Carla',
        email: 'carla@gmail.com',
        dataInscricao: new Date(2024, 1, 28, 20, 15),
        dateCheckIn: new Date(2024, 2, 26, 13, 15)
    },
    {
        nome: 'Luiz',
        email: 'luiz@gmail.com',
        dataInscricao: new Date(2024, 2, 5, 9, 0),
        dateCheckIn: new Date(2024, 2, 27, 10, 45)
    },
    {
        nome: 'Fernanda',
        email: 'fernanda@gmail.com',
        dataInscricao: new Date(2024, 2, 8, 14, 30),
        dateCheckIn: new Date(2024, 2, 28, 15, 0)
    },
    {
        nome: 'Lucas',
        email: 'lucas@gmail.com',
        dataInscricao: new Date(2024, 2, 12, 16, 45),
        dateCheckIn: new Date(2024, 2, 29, 17, 30)
    }
];

const criarNovoParticipante = (participantes) =>{
    const dataInscricao = dayjs(Date.now()).to(participantes.dataInscricao)

    const dateCheckIn = dayjs(Date.now()).to(participantes.dataCheckIn)
    
    return `
    <tr>
        <td>
            <strong>
                ${participantes.nome}
            </strong>
           <br>
            <small>
                ${participantes.email}
            </small>
        </td>
            <td>${dataInscricao}</td>
            <td>${dateCheckIn}</td>
    </tr>
    `
}

const atualizarLista = (participantes) =>{
    let output = ""
    for(let participante of participantes){
        output = output + criarNovoParticipante(participante)
    }

    document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)