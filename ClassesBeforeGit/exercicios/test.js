let a = 'ola mundo'
function myFunction(a){
    const x = a.split('')
    x.splice(0,3)
    x.join('')
    return x
}
console.log(myFunction(a))