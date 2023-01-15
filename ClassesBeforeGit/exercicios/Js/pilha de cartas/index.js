let list = []
let menu = ''

do {

    menu = prompt('Cartas no baralho: ' + list.length + '\n\n-=-=-=-=Menu=-=-=-=-\nSelecione a opção desejada:\n1: Adicionar uma carta\n2: Puxar uma carta\n3: Sair')
    
    switch(menu){
        case '1':
            const addCard = prompt('Qual carta você deseja adicionar? (ex: 4 de copas)')
            if(addCard){
                list.unshift(addCard)
            } else{
                alert('Carta invalida!')
            }
            break
        case '2':
            const removeCard = list.shift()
            if(removeCard){
                alert('A carta retirada do baralho foi: ' + removeCard)
            }else{
                alert('Não há cartas no baralho!')
            }
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção invalida!')
    }
}while(menu !== '3')