for(let i = 0; i < document.querySelectorAll('button').length; i++){
    document.querySelectorAll('button')[i].addEventListener('click', clicked);
}

function clicked (){
    alert('I have been clicked');
}