const Nome = document.getElementById("Nome");
const CPF = document.getElementById("CPF");
const Telefone = document.getElementById("Telefone");
const Email = document.getElementById("Email");
const Quantidade = document.getElementById("Quantidade");
const botao = document.getElementById("botao");


botao.addEventListener('click', () => {
    let dados = {
        valorNome: Nome.value,
        valorCPF: CPF.value,
        valorTelefone: Telefone.value,
        valorEmail: Email.value,
        valorQuantidade: Quantidade.value
    };

    const opcoes = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    };

    fetch('localhost:3000', opcoes)
        .then(response => {

        })
        .catch(error => {
            console.error(error)
        })
});