//atribuindo os elementos para as variaveis
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let documento = document.querySelector("#documento")
let telefone = document.querySelector("#telefone")
let cep = document.querySelector("#cep")
let logradouro = document.querySelector("#logradouro")
let numero = document.querySelector("#numero")
let bairro = document.querySelector("#bairro")
let cidade = document.querySelector("#cidade")
let estado = document.querySelector("#estado")

let nomeOk = false
let emailOk = false
let documentoOk = false
let telefoneOk = false
let cepOk = false
let logradouroOk = false
let numeroOk = false
let bairroOk = false
let cidadeOk = false
let estadoOk = false

//validação do nome 
function validaNome() {
    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else{
        txtNome.innerHTML = ""
        nomeOk = true
    }
}

//validação do telefone 
function validaTelefone() {
    let txtTelefone = document.querySelector("#txtTelefone")

    if (telefone.value.length < 10 ) {
        txtTelefone.innerHTML = "Telefone Inválido"
        txtTelefone.style.color = "red"
    } else{
        txtTelefone.innerHTML = ""
        telefoneOk = true
    }
}

//validação do documento 
function validaDocumento() {
    let txtDocumento = document.querySelector("#txtDocumento")

    if (documento.value.length < 11 ) {
        txtDocumento.innerHTML = "Documento Inválido"
        txtDocumento.style.color = "red"
    } else{
        txtDocumento.innerHTML = ""
        documentoOk = true
    }
}

//validação do cep 
function validaCep() {
    let txtCep = document.querySelector("#txtCep")

    if (cep.value.length < 8 ) {
        txtCep.innerHTML = "CEP Inválido"
        txtCep.style.color = "red"
    } else{
        txtCep.innerHTML = ""
        cepOk = true
    }
}

//validação do bairro
function validaBairro() {
    let txtBairro = document.querySelector("#txtBairro")

    if (bairro.value.length < 4 ) {
        txtBairro.innerHTML = "Bairro Inválido"
        txtBairro.style.color = "red"
    } else{
        txtBairro.innerHTML = ""
        bairroOk = true
    }
}

//validação do logradouro
function validaLogradouro() {
    let txtLogradouro = document.querySelector("#txtLogradouro")

    if (logradouro.value.length < 4 ) {
        txtLogradouro.innerHTML = "Logradouro Inválido"
        txtLogradouro.style.color = "red"
    } else{
        txtLogradouro.innerHTML = ""
        logradouroOk = true
    }
}

//validação do número
function validaNumero() {
    let txtNumero = document.querySelector("#txtNumero")

    if (numero.value.length < 1 ) {
        txtNumero.innerHTML = "Número Inválido"
        txtNumero.style.color = "red"
    } else{
        txtNumero.innerHTML = ""
        numeroOk = true
    }
}

//validação da cidade
function validaCidade() {
    let txtCidade = document.querySelector("#txtCidade")

    if (cidade.value.length < 3 ) {
        txtCidade.innerHTML = "Cidade Inválida"
        txtCidade.style.color = "red"
    } else{
        txtCidade.innerHTML = ""
        cidadeOk = true
    }
}

//validação do estado
function validaEstado() {
    let txtEstado = document.querySelector("#txtEstado")

    if (estado.value.length < 4 ) {
        txtEstado.innerHTML = "Estado Inválido"
        txtEstado.style.color = "red"
    } else{
        txtEstado.innerHTML = ""
        estadoOk = true
    }
}

//validação do email
function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"

    } else {
        txtEmail.innerHTML = ""
        emailOk = true
    }
}

//validação do botão enviar
function enviar() {

    //se algum dado estiver incorreto
    if (nomeOk == false || emailOk == false || cepOk == false || documentoOk == false || telefoneOk == false || bairroOk == false || logradouroOk == false || numeroOk == false || cidadeOk == false || estadoOk == false) {
        alert("Preencha o formulário corretamente antes de enviar!")
    } 

    //se todos os dados estiverem corretos
    else{

        //armazenar dados do formulário na localStorage
        var dados = JSON.parse(localStorage.getItem("dadosCadastro"))

        if(dados == null){
            localStorage.setItem("dadosCadastro", "[]")
            dados= []
        }

        var auxRegistro = {
            nome: nome.value,
            email: email.value,
            cep: cep.value,
            documento: documento.value,
            telefone: telefone.value,
            bairro: bairro.value,
            logradouro: logradouro.value,
            numero: numero.value,
            cidade: cidade.value,
            estado: estado.value



        }

        dados.push(auxRegistro)

        localStorage.setItem("dadosCadastro", JSON.stringify(dados))
        alert("Cadastro feito com sucesso")

        nome.value = ""
        email.value = ""
        cep.value = ""
        documento.value = ""
        telefone.value = ""
        bairro.value = ""
        logradouro.value = ""
        numero.value = ""
        cidade.value = ""
        estado.value = ""

        exibir()
        
        
    }

    //exibir os dados da localStorage
    function exibir(){
        var vdados = localStorage.getItem("dadosCadastro")
        document.write(vdados)

        
    }

    //apagar dados da localStorage
    function apagar(){
        var vdados = localStorage.removeItem("dadosCadastro")
    }
    

}






