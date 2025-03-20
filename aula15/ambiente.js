// let num = [2,3,4]
// num[3] = 6
// num.push(9)
// num.length
// console.log(`Nosso vetor é o ${num}`)

let num=[5,8,2,9,3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}


//os números não ficarão em ordem porque o push(que adiciona elemento) foi colocado depois do sort(que organiza os elementos em ordem crescente).

