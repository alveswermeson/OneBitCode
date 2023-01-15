let menu = ''
const result = {}
const calc = {}

do{
    menu = prompt(
        '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n' +
        ' Bem vindo a calculadora geométrica\n' +
        '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n' +
        'Selecione a opção desejada:' +
        '\n1: Calcular área de um triângulo' +
        '\n2: Calcular área de um retângulo' +
        '\n3: Calcular área de um quadrado' +
        '\n4: Calcular área de um trapézio' +
        '\n5: Calcular área de um cículo' +
        '\n6: Sair'
    )

    switch(menu){
        case '1':
            calc.base = prompt('Quanto mede a base desse triângulo?(cm)')
            calc.height = prompt('Qual a altura desse triângulo?(cm) ')

            if(calc.base && calc.height){
                alert('A área do triângulo informado é: ' + triangle(calc.base, calc.height))
            }else{
                alert('Erro encontrado nos valores informados!\nTente novamente!')
            }
            break

        case '2':
            calc.base = prompt('Quanto mede a base desse retângulo?(cm)')
            calc.height =  prompt('Qual a altura desse retângulo?(cm) ')

            if(calc.base && calc.height){
                alert('A área do retângulo informado é: ' + rectangle(calc.base, calc.height))
            }else{
                alert('Erro encontrado nos valores informados!\nTente novamente!')
            }
            break

        case '3':
            calc.side = prompt('Quanto mede o lado desse quadrado?(cm)')

            if(calc.side){
                alert('A área do quadrado informado é: ' + square(calc.side))
            }else{
                alert('Erro encontrado nos valores informados!\nTente novamente!')
            }
            break

        case '4':
            calc.majorbase = parseFloat(prompt('Quanto mede a base maior do trapézio?(cm)'))
            calc.minorbase = parseFloat(prompt('Quanto mede a base menor do trapézio?(cm)'))
            calc.height = prompt('Qual a altura do trapézio?(cm)')

            if(calc.majorbase && calc.minorbase && calc.height){
                alert('A área do trapézio informado é: ' + trapeze(calc.majorbase, calc.minorbase, calc.height))
            }else{
                alert('Erro encontrado nos valores informados!\nTente novamente!')
            }
            break

        case '5':
            calc.radius = prompt('Quanto mede o raio desse círculo?(cm)')

            if(calc.radius){
                alert('A área do círculo informado é: ' + circle(calc.radius))
            }else{
                alert('Erro encontrado nos valores informados!\nTente novamente!')
            }
            break

        case '6':
            alert('Encerrando...')
            break
        default:
            alert('Opção invalida!')
    }
}while(menu !== '6')

function triangle(base, height){
    result.area = base * height / 2
    return result.area
}
function rectangle(base, height){
    result.area = base * height
    return result.area
}
function square(side){
    result.area = side * side
    return result.area
}
function trapeze(majorbase, minorbase, height){
    result.area = (majorbase + minorbase) * height / 2
    return result.area
}
function circle(radius){
    result.area = 3.14 * (radius * radius)
    return result.area
}