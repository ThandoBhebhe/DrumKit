

for(let i = 0; i < document.querySelectorAll('button').length; i++){

    document.querySelectorAll('button')[i].addEventListener('click', function (){
      makeMatchingSound(this.innerHTML);
      console.log(this.innerHTML)
    });
}

document.addEventListener('keydown',function(el){
    makeMatchingSound(el.key)
})

function makeMatchingSound(keyOrButtonValue){

    switch(keyOrButtonValue){
        case 'w'.toLocaleLowerCase() : sound = new Audio('./sounds/tom-1.mp3');
        sound.play();
        break;

        case 'a'.toLocaleLowerCase(): sound = new Audio('./sounds/tom-2.mp3');
        sound.play();
        break;

        case 's'.toLocaleLowerCase(): sound = new Audio('./sounds/tom-3.mp3');
        sound.play();
        break;

        case 'd'.toLocaleLowerCase(): sound = new Audio('./sounds/tom-4.mp3');
        sound.play();
        break;

        case 'j'.toLocaleLowerCase(): sound = new Audio('./sounds/kick-bass.mp3');
        sound.play();
        break;

        case 'k'.toLocaleLowerCase(): sound = new Audio('./sounds/snare.mp3');
        sound.play();
        break;

        case 'l'.toLocaleLowerCase(): sound = new Audio('./sounds/crash.mp3');
        sound.play();
        break;

        default:
        console.log(keyOrButtonValue)
        break;
    }
}