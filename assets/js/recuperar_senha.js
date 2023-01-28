// Preenchimento do Campo aparece a partir da opção selecionada

$('#porEmail').on('change', () => { $('#displayEmail').removeClass('visually-hidden'); $('#displaySMS').addClass('visually-hidden'); $(':submit').removeClass('visually-hidden')})
$('#porSMS').on('change', () => { $('#displaySMS').removeClass('visually-hidden'); $('#displayEmail').addClass('visually-hidden'); $(':submit').removeClass('visually-hidden')})

