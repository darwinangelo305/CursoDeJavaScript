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
        window.alert('Tudo OK')
    } else {
        window.alert('valor invalido ou ja encontrado na lista')
    }
}