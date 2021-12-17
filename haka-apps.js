//https://html.spec.whatwg.org/multipage/dom.html
// Use the anchor to hide the other posts
var contentES = document.getElementsByClassName("content-es");
var contentEN = document.getElementsByClassName("content-en");

console.log(contentES);
console.log(contentEN);

var myBlogHash = window.location.hash.substr(1);
console.log(myBlogHash);
var urlWithoutHash = window.location.hash.slice(1)
console.log(urlWithoutHash);

if (myBlogHash === "") {
    for (var j=0; j < contentES.length; j++) {
      contentES[j].style.display = "none";
    }
} else {
  for (var j=0; j < contentEN.length; j++) {
    contentEN[j].style.display = "none";
  }
}
