document.querySelector('.click-stealer').addEventListener('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
});

function showScreen(isRightLink) {
    var errorMessage = document.getElementById('error-message'),
        isRightWord = false;
    if(!isRightLink) {
        errorMessage.innerHTML = 'Erro! Você clicou no link errado';
    } else {
        isRightWord = validateWord();
        if (isRightLink && isRightWord) {
            errorMessage.innerHTML = '';
            document.getElementById('hideScreen').remove();
        } else {
            errorMessage.innerHTML = 'Erro! Você inseriu a fruta errada';
        }
    }
}

function validateWord() {
    var message = prompt("What is the fruit?", "");
    if(message === 'avocado' || message === 'Avocado') {
        return true;
    }
    return false;
}