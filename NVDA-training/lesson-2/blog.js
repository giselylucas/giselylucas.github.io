document.querySelector('.click-stealer').addEventListener('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
});

function showErrorAlert(isRigthLink) {
    var errorMessage = document.getElementById('error-message');
    if(!isRigthLink) {
        errorMessage.innerHTML = 'Error! Você clicou no link errado';
    } else {
        errorMessage.innerHTML = '';
        document.getElementById('hideScreen').remove();
    }
}