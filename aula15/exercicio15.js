let num = [0 , 13 , 11 , 44]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosss vetor tem ${num.length} posições`)
console.log(`O primeiro valor di vetir e ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 4 esta na posição ${pos}`)
}
