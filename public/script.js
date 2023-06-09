const Nome = document.getElementById("Nome");
const CPF = document.getElementById("CPF");
const Telefone = document.getElementById("Telefone");
const Email = document.getElementById("Email");
const selecaoSabor = document.getElementById("selecaoSabor");
const Quantidade = document.getElementById("Quantidade");
const botao = document.getElementById("botao");


botao.addEventListener('click', () => {
    let dados = {
        valorNome: Nome.value,
        valorCPF: CPF.value,
        valorTelefone: Telefone.value,
        valorEmail: Email.value,
        valorSabor: selecaoSabor.value,
        valorQuantidade: Quantidade.value
    };

    const opcoes = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    };

    fetch('http://localhost:3000', opcoes)
        .then(response => response.json())
        .then(data => {
            console.log(data.message)
        })
        .catch(error => {
            console.error(error)
        })

    Nome.value = '';
    CPF.value = '';
    Telefone.value = '';
    Email.value = '';
    Quantidade.value = '';
});