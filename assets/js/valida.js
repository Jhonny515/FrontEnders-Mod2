// Validação do E-mail

const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
const campoEmail = $('#email')

campoEmail.on('input', testEmail)

function testEmail() {
    const emailVal = campoEmail.val().trim()

    if (regexEmail.test(emailVal)) {
        campoEmail.next().html('&nbsp;')
        campoEmail.css({'border':''})
    } else {
        campoEmail.next().text('E-mail inválido')
        campoEmail.css({'border':'1px solid red'})
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
    } else {
        campoCel.next().text('Número de celular inválido')
        campoCel.css({'border':'1px solid red'})
    }
}
