window.onload = function (){
    switchButton();
}

function switchButton() {
    let mySwitch = document.getElementById("checkBox");

    mySwitch.addEventListener('click', function(event) {
        console.log(event.valueOf());
    });
}