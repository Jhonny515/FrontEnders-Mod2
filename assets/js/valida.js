// Botão ativado somente se os campos estiverem ok
const atvBotao = () => $('.btn').removeAttr('disabled')
const disBotao = () => $('.btn').prop('disabled', true)

// Validação do E-mail

const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
const campoEmail = $('#email')

campoEmail.on('input', testEmail)

function testEmail() {
    const emailVal = campoEmail.val().trim()

    if (regexEmail.test(emailVal)) {
        campoEmail.next().html('&nbsp;')
        campoEmail.css({'border':''})
        verifCampos()
    } else {
        campoEmail.next().text('E-mail inválido')
        campoEmail.css({'border':'1px solid red'})
        verifCampos()
    }
}

// Validação do celular

const regexTel = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?|([1-9][0-9])\-?)(?:(?:9\d{4})\-?(\d{4}))$/
const campoCel = $('#cel')

campoCel.on('input', testCel)

function testCel () {
    let celVal = campoCel.val()
    if (regexTel.test(celVal)) {
        campoCel.next().html('&nbsp;')
        campoCel.css({'border':''})
        verifCampos()
    } else {
        campoCel.next().text('Número de celular inválido')
        campoCel.css({'border':'1px solid red'})
        verifCampos()
    }
}

// Validação de senha

const campoSenha = $('#senha')

campoSenha.on('input', testSenha)

function testSenha() {
    let senhaVal = campoSenha.val()

    if (senhaVal.length < 8 | senhaVal.includes(' ')) {
        if (senhaVal.length < 8 && senhaVal.includes(' ')) {
            campoSenha.next().html('Senha não pode ter menos de 8 caracteres. <br> Senha não pode conter espaços.')
            campoSenha.css({'border':'1px solid red'})
            verifCampos()
        } else if (senhaVal.length < 8) {
            campoSenha.next().html('Senha não pode ter menos de 8 caracteres.')
            campoSenha.css({'border':'1px solid red'})
            verifCampos()
        } else {
            campoSenha.next().html('Senha não pode conter espaços.')
            campoSenha.css({'border':'1px solid red'})
            verifCampos()
        }
    } else {
        campoSenha.next().html('&nbsp;')
        campoSenha.css({'border':''})
        verifCampos()
    }
}

// Confirmar o envio
$('.btn').on('click', actionBtn)