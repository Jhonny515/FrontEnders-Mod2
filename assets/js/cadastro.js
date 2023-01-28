
const limparFormulario = (endereco) =>{
    $('#endereco').val('')
    $('#bairro').val('') 
    $('#cidade').val('')
    $('#estado').val('')
} 

const preencherFormulario = (endereco) =>{
    $('#endereco').val(endereco.logradouro)
    $('#bairro').val(endereco.bairro) 
    $('#cidade').val(endereco.localidade)
    $('#estado').val(endereco.uf)
 }

let eNumero = (numero) => /^[0-9]+$/.test(numero)
const cepValido = (cep) => cep.length == 8 && eNumero(cep)

const pesquisarCep = async () =>{
    limparFormulario()    
    const cep = $("#cep").val().replace(/[^0-9]/g,'');
    console.log(cep);
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if(cepValido(cep)){
        const dados = await fetch(url)
        const endereco = await dados.json()
        if(endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'Cep não encontrado'
        }else{
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('endereco').value = 'Cep incorreto'
    }
}

$('#cep').focusout(pesquisarCep)

//função mensagens de erro

function mostrarErro(campo,mensagem){    
    const lugarMensagem = campo.next()
    console.log(lugarMensagem);
    lugarMensagem.text(mensagem)
}

function tirarErro(campo){
    const lugarMensagem = campo.next()
    lugarMensagem.innerHTML = ''
}

const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;


//função que verifica email

function vericaEmail(){
    console.log('gggggggggggg');
    let campoEmail = $('#email').val()
    if(regexEmail.test(campoEmail)){
        tirarErro($('#email'))
            }
    else{       
        mostrarErro($('#email'),'Email inválido!')
    }

} 

function verificarSenha() {
    
    const senhaValor = senha.value
    
    if (senhaValor.length < 8) {
        mensagemErro(senha, 'Tamanho mínimo de 8 caracteres')
    }
    else {
        mensagemAcerto(senha, 'senha ok!')
        return true
    }
}

function confirmarSenha() {
    
    const senhaconfValue = senhaRepeat.value
    const senhaValor = senha.value

    if (senhaValor === senhaconfValue) {
        mensagemAcerto(senhaRepeat, 'Ok, as senha são iguais!')
        return true
    }
    else {
        mensagemErro(senhaRepeat, 'Ops, senhas não conferem!')
    }
}


