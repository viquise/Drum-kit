// play drum by clicking on the drums button
$(".drum").click(function(){
    var keySelected = this.innerHTML;
    playsound(keySelected);
    buttonAnimation(keySelected);
});



// Play drum using the keyboard
// document.addEventListener("keydown", function (e){
//     playsound(e.key);
//     buttonAnimation(e.key);
// })
$(document).on("keydown", function (e){
    playsound(e.key);
    buttonAnimation(e.key);
});

function playsound(keyInput){
    switch (keyInput) {
        case "w":
        case "W":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
            break;

        case "a":
        case "A":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
            break;

        case "s":
        case "S":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
            break;

        case "d":
        case "D":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
            break;

        case "j":
        case "J":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
            break;

        case "k":
        case "K":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
            break;

        case "l":
        case "L":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
            break;
        default:
            console.log(keyInput)
            break;
    }
}

function buttonAnimation(buttonPressed) {
    var activeButton = document.querySelector("."+buttonPressed);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
