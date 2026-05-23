function enviarWhats(event) {

    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5567981628739';

    const texto = `Olá, Me Chamo ${nome}, ${mensagem}`
    const mensagemFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`

    console.log(url)

    window.open(url, '_blank')
}