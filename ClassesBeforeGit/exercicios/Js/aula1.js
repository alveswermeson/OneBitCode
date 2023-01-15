let nome = prompt('Qual o seu nome?')
let sobreNome = prompt('Qual seu sobrenome?')
let campoEstudo = prompt('Qual seu campo de estudo?')
let anoNascimento = prompt('Qual o ano do seu nascimento?')
let idade = 2022 - anoNascimento

alert(
    'Recurta cadastrado com sucesso!\n' +
    'Nome completo: ' + nome + ' ' + sobreNome +
    '\nCampo de estudo: ' + campoEstudo +
    '\nIdade: ' + idade
)