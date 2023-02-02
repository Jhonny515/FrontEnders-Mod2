
const limparFormulario = (endereco) =>{
    $('#endereco').val('')
    $('#bairro').val('')          // declaração das variaveis vazias
    $('#cidade').val('')
    $('#estado').val('')
} 

const preencherFormulario = (endereco) =>{
    $('#endereco').val(endereco.logradouro)
    $('#bairro').val(endereco.bairro)         // variaveis recebendo os valores
    $('#cidade').val(endereco.localidade)
    $('#estado').val(endereco.uf)
 }

let eNumero = (numero) => /^[0-9]+$/.test(numero)
const cepValido = (cep) => cep.length == 8 && eNumero(cep)

const pesquisarCep = async () =>{
    limparFormulario()                                   //validação do cep via regex e api viacep
    const cep = $("#cep").val().replace(/[^0-9]/g,'');    
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if(cepValido(cep)){
        const dados = await fetch(url)
        const endereco = await dados.json()
        if(endereco.hasOwnProperty('erro')){
            document.getElementById('cep').value = ''
           
        }else{
            preencherFormulario(endereco);                        
            
        }
    }else{
        document.getElementById('cep').value = 'Cep incorreto'
        
    }
   
}

$('#cep').focusout(pesquisarCep)

//função mensagens de erro

function mostrarErro(campo,mensagem){    
    const lugarMensagem = campo.next()   
    lugarMensagem.text(mensagem)
}

function tirarErro(campo){
    const lugarMensagem = campo.next()
    lugarMensagem.text('')
}

const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;


//função que verifica email

function vericaEmail(){   
    let campoEmail = $('#email').val()
    if(regexEmail.test(campoEmail)){
        tirarErro($('#email'))
        
            }
    else{       
        
        mostrarErro($('#email'),'Email inválido!')
        
    }

} 


//função para verificar a senha

function verificarSenha() {
    
    const senhaValor = $('#senha').val()
    
    if (senhaValor.length < 8) {
        mostrarErro($('#senha'),'Mínimo 8 caracteres')
    }
    else {
        tirarErro($('#senha'))
        return true
    }
}

function confirmarSenha() {
    
    const senhaconfValue = $('#senhaRepeat').val()
    const senhaValor = $('#senha').val()

    if (senhaValor === senhaconfValue) {
        tirarErro($('#senhaRepeat'))
        return true
    }
    else {
        mostrarErro($('#senhaRepeat'), 'Senhas são diferentes!')
    }
}
 



const button = $('#btncadastro').on('click', validarCampos)
$("form").on('submit', (e)=>{
    e.preventDefault()
})                                              //função para verificar se os campos estão vazios
function validarCampos (){
    const mensagensErro = document.querySelectorAll('.mensagemErro')
    const todosCampos = document.querySelectorAll('input')
    let camposVazios = false
    mensagensErro.forEach((msg)=>{
        if(msg.innerText!=''){
            camposVazios = true

        }
        
    })
    todosCampos.forEach((valor)=>{
        if(valor.value.length == 0){
            camposVazios = true
            console.log(valor.value);
        }
        else{
            console.log(camposVazios);
        }
    }) 
    
    if(camposVazios==true){
        $('#mensagem').text('Existem campos vazios!')
    }
    else{
        $('#mensagem').text('Cadastro finalizado com sucesso!')
        setTimeout(() => {document.location.reload()},2000)
    }
}
  








