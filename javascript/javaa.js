/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//  MICRO INTERACTIE "OPSLAAN" //


// Verkrijg de modal
var modal = document.getElementById('popup');


// Download de knop waarmee het modale wordt geopend
var btn = document.getElementById("opslaan");

// Roept het <span> element aan dat het modal sluit.
var span = document.getElementsByClassName("close")[0];

// Wanneer de gebruiker op de button "opslaan" klikt wordt het  content blokje geopend
btn.onclick = function() {
  modal.style.display = "block";
}

// Wanneer de gebruiker op "sluiten" klikt, wordt het content blokje gesloten.
span.onclick = function() {
  modal.style.display = "none";
}

// Als de gebruiker buiten het content blokje klikt, wordt het ook gesloten.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}








//Animate On Scroll script//
AOS.init({
  easing: 'ease-in-out',
});

//AOS.init({
//  offset: 200,
//  duration: 800,
//  easing: 'ease-in-quad',
//  delay: 500,
//});

