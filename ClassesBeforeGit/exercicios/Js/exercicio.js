let entrada1 = prompt('Digite um valor:')
let entrada2 = prompt('Digite um valor:')

let valor1 = parseFloat(entrada1)
let valor2 = parseFloat(entrada2)
let soma = valor1 + valor2
let subtracao = valor1 - valor2
let multiplicacao = valor1 * valor2
let divisao = valor1 / valor2

alert(
    'O resultado da soma é: ' + soma +'\nO resultado da subtração é: ' + subtracao +
    '\nO resultado da multiplicação é: ' + multiplicacao +
    '\nO resultado da divisao é: ' + divisao
)