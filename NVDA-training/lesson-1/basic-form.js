document.querySelector('.click-stealer').addEventListener('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
});
function showScreen(){
    var form = document.getElementById('form1'),
        isValid = form.checkValidity();
    
    if(isValid && checkRightValues()) {
        document.getElementById('hideScreen').remove();
    } else {
        showErrorAlert();
    }
}

function checkRightValues() {
    var country = document.getElementById('country'),
        colors = document.getElementById('colors'),
        isPadawan = document.getElementById('r2').checked;
    return country.value === '1' && colors === 'Green' && isPadawan;

}

function showErrorAlert() {
    var errorMessage = document.getElementById('error-message');
    if(!checkRightValues()) {
        errorMessage.innerHTML = 'Você não atendeu as especificações desse form';
    } else {
        errorMessage.innerHTML = '';
    }
}