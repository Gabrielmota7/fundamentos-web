/*
case sensitive = reconhece letras maiusculas e minusculas

por tag: getElementByTagName()
por Id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()

*/

let nome = window.document.getElementById('Nome')
let email = document.querySelector('#email')
let assunt = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
let sugestao = document.querySelector('#susgestao')
let sugestaoOk = false

Nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(Nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }
    else {
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(Email.value.indexof('@') == -1 || Email.value.indeof('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color= 'green'
        emailOk= true
    }

    }

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto é muito grande digite apenas 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else {
        txtAssunto.style.display = 'none'
        assuntoOk= true
    }
}    

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
    alert('Enviado com sucesso')
    }
    else {
        alert('Preencha corretamente para enviar')
    }
}

function mapaZoom() {
    mapa.style.width= '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width= '400px'
    mapa.style.height = '250px'
}

function validaSugestao(){
    let txtSugestao = document.querySelector('#txtSugestao')
    if(susgestao.value.length >= 200){
    txtSugestao.innerHTML = 'Texto é muito grande digite apenas 200 caracteres'
        txtSugestao.style.color = 'red'
        txtSugestao.style.display = 'block'
    }
    else {
        txtSugestao.style.display = 'block'
        sugestaoOk= true
    }
}

function enviarSugestao() {
    if(susgestaoOk == true){
        alert('Sugestão enviada com sucesso')
    }
}