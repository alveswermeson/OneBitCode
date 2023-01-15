const metros = prompt('Digite qual medida você quer converter (metros):')
let select = prompt(
    'Em qual medida os metros digitados devem ser convertidos?\n1 = milímetro(mm)\n2 = centímetro(cm)\n3 = decímetro(dm)\n4 = decâmetro(dam)\n5 = hectômetro(hm)\n6 = quilômetro(km)'
)
select = parseFloat(select)
switch(select){
    case 1:
        alert(metros*1000)
        break
    case 2:
        alert(metros*100)
        break
    case 3:
        alert(metros*10)
        break
    case 4:
        alert(metros/10)
        break
    case 5:
        alert(metros/100)
        break
    case 6:
        alert(metros/1000)
        break
    default:
        alert('Opção inválida!')
}