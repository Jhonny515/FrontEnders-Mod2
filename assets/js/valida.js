// Botão ativado somente se os campos estiverem ok
const atvBotao = () => $('.btn').removeAttr('disabled');
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
        atvBotao()
    } else {
        campoEmail.next().text('E-mail inválido')
        campoEmail.css({'border':'1px solid red'})
        disBotao()
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
        atvBotao()
    } else {
        campoCel.next().text('Número de celular inválido')
        campoCel.css({'border':'1px solid red'})
        disBotao()
    }
}

// Confirmar o envio
$('.btn').on('click', () => {
    $('.successAlert').css({
        'right': '1rem'
    })

    $('.timebar').animate({'width': '0%'}, 5000)
    setTimeout(()=>{
        $('.successAlert').css({'right':''})
        $('.timebar').css({'width': '100%'})
    }, 5000)
    disBotao()
})