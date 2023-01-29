// Preenchimento do Campo aparece a partir da opção selecionada

$('#porEmail').on('change', whichIsActive)
$('#porSMS').on('change', whichIsActive)

function whichIsActive() {
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