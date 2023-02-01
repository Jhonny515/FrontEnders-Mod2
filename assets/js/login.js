function verifCampos() {
    if(regexEmail.test($('#email').val().trim()) && $('#senha').val().length >= 8 && !$('#senha').val().includes(' ')){
        atvBotao()
    } else {
        return false
    }
}

function actionBtn(){
    alert('Logado com sucesso!')
    window.location.href = './index.html'
}