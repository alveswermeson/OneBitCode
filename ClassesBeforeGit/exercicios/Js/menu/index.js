let stop = false
do{
    let menu = prompt(
        '-*-*-*Menu*-*-*-\n' + 'Selecione uma das opções:\n1: Orçamento\n2: Comprar\n3: Falar com atendente\n4: Duvidas\n5: Encerrar'
    )
    menu = parseFloat(menu)
    if(menu === 5){
        alert('Você escolheu encerrar')
        stop = true
    }
    switch (menu){
        case 1:
            alert('Você escolheu a opção 1')
            break
        case 2:
            alert('Você escolheu a opção 2')
            break
        case 3:
            alert('Você escolheu a opção 3')
            break
        case 4:
            alert('Você escolheu a opção 4')
            break
    }
} while(stop === false)