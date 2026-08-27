
const formularioLogin = document.getElementById("form-login");
    console.log(formularioLogin);

    
const inputEmail = document.getElementById("input-email");
const inputSenha = document.getElementById("input-senha");
const erroEmail = document.getElementById("erro-email");
const erroSenha = document.getElementById("erro-senha");
const emailFake = "administrador@gmail.com";
const senhaFake = "123456";


formularioLogin.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("Formulário enviado");

    erroEmail.textContent = "";
    erroSenha.textContent ="";
if(inputEmail.value === ""){
    erroEmail.textContent = "Digite o email";
}
else if( inputEmail.value != emailFake){
    erroEmail.textContent = "Digite seu email novamente "
}

if (inputSenha.value.length < 6){
    erroSenha.textContent = "A senha deve ser maior ou igual a 6 caracteres";
}

else if ( inputSenha.value != senhaFake){
  
    erroSenha.textContent = "Digite a senha novamente";
}

if  (inputEmail.value === emailFake && inputSenha.value === senhaFake){
window.location.href = "dashboard.html";
}
else {
    erroEmail.textContent = "Digite o email novamente ";
    erroSenha.textContent = "Digite a senha novamente";
}

});