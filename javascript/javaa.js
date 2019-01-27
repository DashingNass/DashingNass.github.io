/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


// MICRO INTERACTIE 1: DOWNLOAD BUTTON //
var buttonInloggen = document.querySelectorAll("footer button");

console.log(buttonInloggen)

for(var i=0; i< buttonInloggen.length; i++){
    buttonInloggen[i].addEventListener("click", function(){
   var melding = document.querySelector("header nav section")
   melding.classList.toggle("show");
})
}

// MICRO INTERACTIE 2: VERHAAL OPSLAAN //
const
    popup = document.getElementById('popup'),
    enablePopup = document.getElementsByClassName('togglePopup');

for (let i = 0; i < enablePopup.length; i++) {
    const el = enablePopup[i];

    el.addEventListener('click',getPopup)

}

function getPopup(){
    popup.classList.toggle('hidden');
}



/* DE INTERACTIE VOOR HET SCROLLENDE VERHAAL IS AFKOMSTIG VAN ANIMATE OM SCROLL
 Bron: https://michalsnik.github.io/aos */
AOS.init({
 easing: 'ease-in-out',

});
