let nomeAtk = prompt('Digite o nome do personagem que está atacando: ')
let poderAtk = prompt('Digite seu poder de ataque: ')
let nomeDef = prompt('Digite o nome do personagem que está defendendo: ')
let pontosDeVida = prompt('Digite a quantidade de pontos de vida desse personagem: ')
let poderDef = prompt('Digite seu poder de defesa: ')
let escudo = confirm('O personagem está usando escudo?')
let dano
console.log(poderAtk - poderDef)

if(poderAtk > poderDef && escudo === false){
    dano = poderAtk - poderDef
} else if(poderAtk > poderDef && escudo === true){
    dano = (poderAtk - poderDef) / 2
} else if(poderAtk <= poderDef){
    dano = 0
}

pontosDeVida = pontosDeVida - dano
alert(
    'Atualização de dados...' + '\n\nDano causado: ' + dano + '\nO personagem atacante mantem os mesmos status.' + '\nPersonagem defensor passa a ter ' + pontosDeVida + ' pontos de vida.'
)