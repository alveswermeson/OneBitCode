let menu = ''
let register = []

do{
    menu = prompt('A quantidade de casas cadastra das é: ' + register.length +'\n\n-=-=-=-=Menu=-=-=-=-\nSelecione uma opção:\n1: Cadastrar imóvel\n2: Ver imóveis cadastrados\n3: Sair')

    switch(menu){
        case '1':
            const property = {}
            property.owner = prompt('Qual o nome do proprietário? ')
            property.bedrooms = prompt('Quantos quartos o imóvel tem?')
            property.bathrooms = prompt('Quantos banheiros o imóvel tem?')
            property.garage = prompt('O imóvel tem garagem? (Sim/Não)')

            const check = confirm(
                'Salvar este imóvel?\n' + 
                '\nProprietário: ' + property.owner +
                '\nQuartos: ' + property.bedrooms +
                '\nBanheiros: ' + property.bathrooms +
                '\nGaragem: ' + property.garage)
            
            if(check){
                register.push(property)
                alert('Imóvel salvo com sucesso!')
            }else{
                alert('Voltando para o menu.')
            }
            break
        case '2':
            for (let i = 0; i < register.length; i++){
                alert(
                    'Imóvel ' + (i + 1) +
                    '\nProprietário: ' + register[i].owner +
                    '\nQuartos: ' + register[i].bedrooms +
                    '\nBanheiros: ' + register[i].bathrooms +
                    '\nGaragem: ' + register[i].garage
                )
            }
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção invalida!')
    }
}while(menu !== '3')