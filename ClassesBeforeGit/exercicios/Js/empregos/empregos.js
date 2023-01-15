let menu = ''
const jobs = []

do {
    showMenu()

    switch(menu){
        case '1':
            showJobs()
            break
        case '2':
            creatJob()
            break
        case '3':
            showOneJob()
            break
        case '4':
            enroll()
            break
        case '5':
            deleteJob()
            break
        case '6':
            alert('Encerrando...')
            break
        default:
            alert('Opção invalida!')
    }
}while(menu !== '6')

function showMenu(){
    menu = prompt(
        '-=-=-=-=-=WAD Vagas=-=-=-=-=-' +
        '\n\nSelecione a opção desejada:' +
        '\n1: Listar vagas disponíveis\n2: Criar uma nova vaga\n3: Visualizar uma vaga\n4: Inscrever um candidato em uma vaga\n5: Excluir uma vaga\n6: Sair'
    )
    return menu
}

function showJobs(){
    const textJobs = jobs.reduce(function(text, jobs,index){
        text += (index + 1) + '. '
        text += jobs.name
        text += ' (' + jobs.candidates.length + ' candidatos)\n'
        return text
    }, '')
    alert(textJobs)
}

function creatJob(){
    const name = prompt('Digite o nome da vaga: ')
    const description = prompt('Digite uma descrição para a vaga:')
    const date = prompt('Digite a data(dd/mm/aa) limite da vaga:')

    const confirmation = confirm(
        'Você deseja criar uma vaga com as seguintes informações?' +
        '\n\nNome: ' + name +
        '\nDescrição: ' + description +
        '\nData limite: ' + date
    )

    if(confirmation){
        const job = {name, description, date, candidates: []}
        jobs.push(job)
        alert('Vaga criada com sucesso!')
    }
}

function showOneJob(){
    const index = prompt('Digite o indíce da vaga desejada: ')
    const job = jobs[index - 1]
    const textCandidates = job.candidates.reduce(function(finalText, candidate){
        return finalText + '\n - ' + candidate
    }, '')

    alert(
        'Vaga n°: ' + index +
        '\nNome: ' + job.name +
        '\nDescrição: ' + job.description +
        '\nData limite: ' + job.date +
        '\nQuantidade de candidatos: ' + job.candidates.length +
        '\nCandidatos: ' + textCandidates
    )
}

function enroll(){
    const candidate = prompt('Digite o nome do candidato que vai ser inscrito: ')
    const index = prompt('Digite o indice da vaga que deseja se inscrever: ')
    const job = jobs[index - 1]

    const confirmation = confirm(
        'Deseja inscrever o candidato ' + candidate +
        ' na vaga ' + index + '?\n'+
        'Nome: ' + job.name + '\nDescrição: ' + job.description +
        '\nData limite: ' + job.date
    )
    if(confirmation){
        job.candidates.push(candidate)
        alert('Inscrição feito com sucesso!')
    }
}

function deleteJob(){
    const index = prompt('Digite o indice da vaga que deseja excluir: ')
    const job = jobs[index - 1]

    const confirmation = confirm(
        'Tem certeza que deseja excluir a vaga ' + index + '?\n' + 'Nome: ' + job.name + '\nDescrição: ' + job.description +
        '\nData limite: ' + job.date
    )

    if(confirmation){
        jobs.splice((index - 1), 1)
        alert('Vaga excluida com sucesso!')
    }
}