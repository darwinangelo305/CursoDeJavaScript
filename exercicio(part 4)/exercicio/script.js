function contar () {
    let ini = document.getElementById('txti')
    let fin = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam dadors!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ) {
            window.alert('Passo Invalido! considerando PASSO 1')
        }
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} U+1FAEA`
        }
        res.innerHTML +=`U+1FAEA	`
    } 
}