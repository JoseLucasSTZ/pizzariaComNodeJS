const Nome = document.getElementById("Nome");
const CPF = document.getElementById("CPF");
const Telefone = document.getElementById("Telefone");
const Email = document.getElementById("Email");
const Quantidade = document.getElementById("Quantidade");
const botao = document.getElementById("botao");


botao.addEventListener('click', () => {
    valorNome = Nome.value;
    valorCPF = CPF.value;
    valorTelefone = Telefone.value;
    valorEmail = Email.value;
    valorQuantidade = Quantidade.value;


});