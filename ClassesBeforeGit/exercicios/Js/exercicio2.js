let nome1 = prompt('Digite o nome  do primeiro veiculo: ')
let velocidade1 = prompt('Qual a velocidade em km desse veiculo? ')
let nome2 = prompt('Digite a velocidade do segundo veiculo: ')
let velocidade2 = prompt('Qual a velocidade em km desse veiculo? ')

if(velocidade1 > velocidade2){
    alert('O veiculo com maior velocidade é o ' + nome1)
} else if(velocidade1 < velocidade2){
    alert('O veiculo com maior velocidade é o ' +nome2)
} else{
    alert('A velocidade dos dois veiculos são iguais!')
}