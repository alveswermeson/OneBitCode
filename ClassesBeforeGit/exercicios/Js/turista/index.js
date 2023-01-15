const turista = prompt('Olá turista! Qual o seu nome? ')
let cidades = ''
let contagem = 0
let continuar = prompt('Você visitou alguma cidade? (Sim/Não)')

while(continuar === 'Sim'){
    let cidade = prompt('Qual o nome da cidade visitada?')
    cidades += ' - ' + cidade + '\n'
    contagem++
    continuar = prompt('Você visitou alguma outra cidade? ')
}
alert(
    turista + ', você visitou ' + contagem + ' cidades.\n' +
    'As cidades visitadas foram as seguintes: \n' + cidades
)