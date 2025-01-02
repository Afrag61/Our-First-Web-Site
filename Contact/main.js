var inputName = document.getElementById('input-name')
var inputMail = document.getElementById('input-mail')
var inputMessage = document.getElementById('input-message')
var button = document.querySelector('.submit-button')
var regEx = /\S+@\S+\.\S+/
var form = document.querySelector('.form')
var text = document.querySelector('.helper')

function checkInput(){
    if(inputName.value.trim() !== '' && regEx.test(inputMail.value) && inputMessage.value.trim() !== ''){
        button.style.backgroundColor = '#fa923f'
        button.style.border = '1px solid #521751';
        button.disabled = false;
    }else{
        button.style.backgroundColor = '#979695'
        button.style.border = '1px solid gray';
        button.disabled = true;
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    inputName.value = ''
    inputMail.value = ''
    inputMessage.value = ''
    text.style.display = 'flex'
    setTimeout(() => {
        text.style.display = 'none'
    },3000)
})