const word = prompt('Digite uma palavra: ')
let twin = ''
for (i = word.length - 1; i >= 0; i--){
    twin += word[i]
}
if(word == twin){
    alert('A palavra ' + word + ' é um palíndromo.')
} else{
    alert('A palavra ' + word + ' escrita ao contrario vira: ' + twin + ' sendo assim ela não é um palíndromo.')
}