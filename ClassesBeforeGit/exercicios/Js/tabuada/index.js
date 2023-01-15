alert('Bem vindo a Tabuada!')
const number = prompt('Qual número (de 1 a 20) você deseja calcular? ')
let result
let resultfinal = ''

for(let i = 1; i <= 20; i++){
    result = number * i 
    resultfinal += number + 'x' + i + '=' + result + '\n'
}
alert('O resultado da sua tabuada é o seguinte: \n' + resultfinal)