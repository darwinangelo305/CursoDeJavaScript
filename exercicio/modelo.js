function contador() {
    let con = document.getElementById('htm')
    let but = document.getElementById('tto')
    if (con <= 100) {
        console.log('Esse numero e maior que 100 pode continuar a adicionar')
    } else {
        console.log('esse numero um numero negativo ou maior que 100, tente outro!')
        window.alert('ERROR')
    }
}