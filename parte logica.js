var nome = prompt('Digite seu nome:')
var nome1 = nome.length
var nome3 = document.getElementById('nome')

while (nome1 > 30) {
    alert('Seu nome não pode\nter mais de 30 caracteres')
    var nome = prompt('Digite seu nome:')
    var nome1 = nome.length
}

nome1 = nome.toLowerCase()

if (nome1 == 'jacyel') {
    nome3.innerText = `Olá senhor ${nome}`

} else if (nome != 'jacyel' && nome1.length >= 1) {
    nome3.innerText = `Olá ${nome} obrigador por acessar a pagina`
}