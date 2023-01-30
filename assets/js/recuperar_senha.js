// Preenchimento do Campo aparece a partir da opção selecionada

$('#porEmail').on('change', verifCampos)
$('#porSMS').on('change', verifCampos)

function verifCampos() {
    if ($('#porEmail:checked').val() == 'on') {
        $('#displayEmail').removeClass('visually-hidden'); 
        $('#displaySMS').addClass('visually-hidden'); 
        $(':submit').removeClass('visually-hidden');

        if($('#email').val() == '') {
            disBotao()
        } else {
            atvBotao()
        }
    }
    else {
        $('#displaySMS').removeClass('visually-hidden'); 
        $('#displayEmail').addClass('visually-hidden'); 
        $(':submit').removeClass('visually-hidden');

        if($('#cel').val() == '') {
            disBotao()
        } else {
            atvBotao()
        }
    }
}

// Ação do botão Enviar

function actionBtn() {
    $('.successAlert').css({
        'right': '1rem'
    })

    $('.timebar').animate({'width': '0%'}, 5000)
    setTimeout(()=>{
        $('.successAlert').css({'right':''}),
        $('.timebar').css({'width': '100%'})
    }, 5000)
    disBotao()
}