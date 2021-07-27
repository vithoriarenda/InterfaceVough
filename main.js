/* Função para armazenar os dados de login no localStorage */
function loginUser(){
    /* Declara as variáveis e retorna elas pelo ID utilizado no formulário de login no HTML */
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var dados = JSON.parse(localStorage.getItem("loginUser"));

    if(dados == null){
        localStorage.setItem("loginUser", "[]");
        dados = [];
    }

    var auxRegistro = {
        email: email.value(),
        password: password.value()
    }

    dados.push(auxRegistro);

    localStorage.setItem("loginUser", JSON.stringify(dados));

    /* Retorna os valores vazios para um novo login */
    email.value == "";
    password.value == "";
}
