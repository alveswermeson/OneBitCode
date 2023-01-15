let list = []
let menu = ''

do {
    let patient = ''
    for(let i = 0; i < list.length; i++){
        patient += (i + 1) + 'º - ' + list[i] + '\n'
    }
    menu = prompt('Pacientes:\n' + patient + '\n-=-=-=-=Menu=-=-=-=-\nSelecione a opção desejada:\n\n1: Novo paciente\n2: Consultar paciente\n3: Sair')

    switch(menu){
        case '1':
            const newPatient = prompt('Qual o nome do paciente?')
            list.push(newPatient)
            break
        case '2':
            const remove = list.shift()
            if(remove){
                alert('O paciente a ser consultado é o ' + remove)
            }else{
                alert('Não há pacientes na fila!')
            }
            break
        case '3':
            alert('Até a proxima.')
            break
        default:
            alert('Opção invalida!')
    }
    }while(menu !== '3')