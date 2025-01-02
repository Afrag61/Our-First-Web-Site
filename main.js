var images = document.querySelectorAll('.trip-image')
var backdrop = document.querySelector('.backdrop')
var modal =document.querySelector('.modal')

function openModal(){
    backdrop.style.display = 'block'
    modal.style.display = 'flex'
}

function closeModal(){
    backdrop.style.display = 'none'
    modal.style.display = 'none'
}

for(var x = 0; x < images.length; x++){
    // images[x].onclick = openModal
    images[x].addEventListener('click', openModal)
}

// backdrop.onclick = closeModal
backdrop.addEventListener('click', closeModal)
