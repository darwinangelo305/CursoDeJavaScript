let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function iLista(n, l) {
    if (l.indeOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && linLista(num.value)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value = ' '
    num.focus()
}

function finalisar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalisar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores) {
            if (valores[pos] > maior)
                maior = valores[pos]
            if (falores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ' '
        res.innerHTML += `<p>Ao todo, teos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`    
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`        
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`    
        res.innerHTML += `<p>A media dos valores digitados e ${media}.</p>`    
        
    }
}