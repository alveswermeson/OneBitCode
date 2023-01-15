let stop = false
let value = 0
let money = prompt('Qual sua quantidade de dinheiro inicial?')
money = parseFloat(money)

do{
    let menu = prompt('Dinheiro atual: ' + money + ' reais\n' + 'Selecione uma das opções: \n' + '1: Adicionar dinheiro\n2: Remover dinheiro\n3: Encerrar')
    menu = parseFloat(menu)

    if(menu === 3){
        stop = true
    } else if(menu === 1){
        value = prompt('Quanto dinheiro você gostaria de adicionar?')
        money += parseFloat(value)
    } else if(menu === 2){
        value = prompt('Quanto dinheiro você gostaria de remover?')
        money -= parseFloat(value)
    } else{
        alert('Opção Invalida')
    }
}while(stop === false)