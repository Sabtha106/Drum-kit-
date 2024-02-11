
var numberOfButtons = document.querySelectorAll(".drum").length;

for(i=0; i<numberOfButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var button = this.innerHTML;
        sounds(button);
        buttonAnimation(button);
    

    });

}

document.addEventListener("keydown", function(event){
    sounds(event.key);
    buttonAnimation(event.key);
})

function sounds(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play(); // -> Method that plays the sound.
            break;

            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play(); // -> Method that plays the sound.
                break;

            case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play(); // -> Method that plays the sound.
            break;

            case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play(); // -> Method that plays the sound.
            break;

            case "j":
            var kickBase = new Audio('sounds/kick-bass.mp3');
            kickBase.play(); // -> Method that plays the sound.
            break;

            case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play(); // -> Method that plays the sound.
            break;

            case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play(); // -> Method that plays the sound.
            break;
            
    
        default:
            console.log(button);
            break;
    }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 180)

    
}


