//https://html.spec.whatwg.org/multipage/dom.html
// Use the anchor to hide the other posts
var contentES = document.getElementsByClassName("content-es");
var contentEN = document.getElementsByClassName("content-en");
var navBar = document.getElementById("navbar");
var translateES = document.getElementById("translateES");
var translateEN = document.getElementById("translateEN");

console.log(contentES);
console.log(contentEN);

translateES.addEventListener('click', function(e){
    translate();
})

translateEN.addEventListener('click', function(e){
    translate();
})

function translate() {
    var myBlogHash = window.location.hash.substr(1);
    console.log(myBlogHash);
    if (myBlogHash === "") {
        updateNavbarEN();
        for (var j=0; j < contentES.length; j++) {
          contentES[j].style.display = "none";
          contentEN[j].style.display = "block";
        }
    } else {
        updateNavbarES();
        for (var j=0; j < contentEN.length; j++) {
            contentEN[j].style.display = "none";
            contentES[j].style.display = "block";
        }
    }
}

document.addEventListener('click', function (e) {
    var translateES = document.getElementById("translateES");
    var urlWithoutHash = window.location.href.split("#")
    console.log(urlWithoutHash);
    console.log(e.target);
    if (e.target == translateES) {
        location.href = location.href + "#es";
        translate();
    } else {
        location.href = urlWithoutHash[0];
        translate();
    }
});

function updateNavbarES() {
    navBar.innerHTML = '<div class="toolbar" id="toolbar">'+
    '<div class="item"><a href="./inicio.html">BITACORA</a></div>' +
    '<div class="item"><a href="./apps.html#es">APPS</a></div>' +
    '<div class="item"><a href="./resources.html#es">RECURSOS</a></div>' +
    '<div class="item"><a href="./about.html#es">CONTACTO</a></div>' +
    '<div class="item"><a href="./search.html#es">BUSCAR</a></div>' +
    '<div class="item" id="translateEN">🇺🇸EN</div>' +
    '<div class="item" id="translateES">🇪🇸ES</div></div>'
}

function updateNavbarEN() {
    navBar.innerHTML = '<div class="toolbar" id="toolbar">'+
    '<div class="item"><a href="./index.html">LOGBOOK</a></div>' +
    '<div class="item"><a href="./apps.html">APPS</a></div>' +
    '<div class="item"><a href="./resources.html">RESOURCES</a></div>' +
    '<div class="item"><a href="./about.html">ABOUT</a></div>' +
    '<div class="item"><a href="./search.html">SEARCH</a></div>' +
    '<div class="item" id="translateEN">🇺🇸EN</div>' +
    '<div class="item" id="translateES">🇪🇸ES</div></div>'
}

window.onload = translate();